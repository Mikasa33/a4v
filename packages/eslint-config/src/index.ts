import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import { antfu } from '@antfu/eslint-config'

export function a4v(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
) {
  // https://github.com/antfu/eslint-config
  return antfu(
    {
      // // 强制启动 vue
      vue: true,
      // https://github.com/antfu/eslint-plugin-format
      formatters: true,
      ...options,
    },
    ...userConfigs,
  )
}
export default a4v
