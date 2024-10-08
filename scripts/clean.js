import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { consola } from 'consola'

const rootDir = process.cwd()

/**
 * 递归查找并删除目标目录
 *
 * @param {string} currentDir - 当前遍历的目录路径
 */
async function recursiveCleanTargets(currentDir, targets) {
  const items = fs.readdirSync(currentDir)
  for (const item of items) {
    try {
      const itemPath = path.join(currentDir, item)
      if (targets.includes(item)) {
        // 匹配到目标目录或文件时直接删除
        fs.rmSync(itemPath, { force: true, recursive: true })
        consola.success(`Deleted: ${itemPath}`)
      }
      try {
        const stat = fs.lstatSync(itemPath)
        if (stat.isDirectory()) {
          await recursiveCleanTargets(itemPath, targets)
        }
      }
      catch {}
    }
    catch (error) {
      consola.error(`Error handling item ${item} in ${currentDir}: ${error.message}.`)
    }
  }
}

(async function clean() {
  // 要删除的目录及文件名称
  const targets = ['node_modules', 'dist', 'dist.zip']
  const deleteLockFile = process.argv.includes('--del-lock')
  if (deleteLockFile) {
    targets.push('pnpm-lock.yaml')
  }
  consola.success(`Starting cleanup of targets: ${targets.join(', ')} from root: ${rootDir}.`)
  try {
    await recursiveCleanTargets(rootDir, targets)
    consola.success('Cleanup process completed.')
  }
  catch (error) {
    consola.error(`\x1B[31mUnexpected error during cleanup: ${error.message}.`)
  }
})()
