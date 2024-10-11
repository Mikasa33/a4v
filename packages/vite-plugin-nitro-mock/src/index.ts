import type { PluginOption } from 'vite'
import chalk from 'chalk'
import consola from 'consola'
import { getPort } from 'get-port-please'
import { build, createDevServer, createNitro, prepare } from 'nitropack'

const hmrKeyRe = /^runtimeConfig\.|routeRules\./

async function runNitroServer(rootDir: string, port: number) {
  let nitro: any
  const reload = async () => {
    if (nitro) {
      consola.info('Restarting dev server...')
      if ('unwatch' in nitro.options._c12) {
        await nitro.options._c12.unwatch()
      }
      await nitro.close()
    }
    nitro = await createNitro(
      {
        dev: true,
        preset: 'nitro-dev',
        rootDir,
      },
      {
        c12: {
          async onUpdate({ getDiff, newConfig }: any) {
            const diff = getDiff()
            if (diff.length === 0) {
              return
            }
            consola.info(
              `Nitro config updated:\n${diff
                .map((entry: any) => `  ${entry.toString()}`)
                .join('\n')}`,
            )
            await (diff.every((e: any) => hmrKeyRe.test(e.key))
              ? nitro.updateConfig(newConfig.config)
              : reload())
          },
        },
        watch: true,
      },
    )
    nitro.hooks.hookOnce('restart', reload)

    const server = createDevServer(nitro)
    await server.listen(port, { showURL: false })
    await prepare(nitro)
    await build(nitro)

    consola.success(chalk.bold(chalk.green('Nitro Mock Server started.')))
  }
  return await reload()
}

/**
 * 用于前端项目启动时自动启动 mock 服务
 */
export async function VitePluginNitroMock(options: { rootDir: string, port?: number }): Promise<PluginOption | undefined> {
  const { rootDir, port = 7776 } = options

  return {
    async configureServer(server) {
      const availablePort = await getPort({ port })
      if (availablePort !== port) {
        return
      }

      runNitroServer(rootDir, port)

      const _printUrls = server.printUrls
      server.printUrls = () => {
        _printUrls()
        consola.log(`  ${chalk.green('➜')}  ${chalk.bold('Nitro Mock Server')}: ${chalk.cyan(`http://localhost:${chalk.bold(port)}/api`)}`)
      }
    },
    enforce: 'pre',
    name: 'vite:nitro-mock',
  }
}
