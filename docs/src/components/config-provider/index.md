# 全局化配置 Config Provider

全局化配置设置内部组件的主题、语言和组件卸载于其他位置的 DOM 的类名。

## 演示

### 主题

设置内部组件的主题。

<ConfigProviderBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

### 工具 API

使用弹窗提示等工具 API。直接通过 `$xxx` 使用，或通过 `window.$xxx` 使用。

<ConfigProviderTools />

::: details 查看代码
<<< ./demos/Tools.vue
:::

## API

### ConfigProvider Props

支持 [NConfigProvider](https://www.naiveui.com/zh-CN/light/components/config-provider#ConfigProvider-Props) 所有属性。

| 名称         | 说明                                                                                                                              | 类型      | 默认值 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ------ |
| global-style | 将提供的主题同步到 `document.body` 上，具体说明请查看 [NGlobalStyle](https://www.naiveui.com/zh-CN/light/components/global-style) | `boolean` | `true` |
