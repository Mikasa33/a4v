# 模态框 Modal

它会弹出来，然后给你看点东西。

## 演示

### 基础

基础模态框用法。

<ModalBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

## API

### Modal Props

支持 [NModal](https://www.naiveui.com/zh-CN/light/components/modal#Modal-Props) 和 [NCard](https://www.naiveui.com/zh-CN/light/components/card#Card-Props) 所有属性。

| 名称           | 说明                                  | 类型      | 默认值  |
| -------------- | ------------------------------------- | --------- | ------- |
| auto-focus     | 是否自动聚焦 Modal 第一个可聚焦的元素 | `boolean` | `false` |
| bordered       | 是否显示卡片边框                      | `boolean` | `false` |
| closable       | 是否允许关闭                          | `boolean` | `true`  |
| fullscreenable | 是否允许全屏                          | `boolean` | `true`  |
