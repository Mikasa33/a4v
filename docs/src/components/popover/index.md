# 弹出框 Popover

在内容周围弹出一些隐藏的信息。

## 演示

### 基础

基础弹出用法。

<PopoverBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

## API

### Popover Props

支持 [NPopover](https://www.naiveui.com/zh-CN/light/components/popover#Popover-Props) 和 [NCard](https://www.naiveui.com/zh-CN/light/components/card#Card-Props) 所有属性。

| 名称           | 说明                                          | 类型               | 默认值  |
| -------------- | --------------------------------------------- | ------------------ | ------- |
| auto-focus     | 是否自动聚焦 Popover 第一个可聚焦的元素       | `boolean`          | `false` |
| bordered       | 是否显示卡片边框                              | `boolean`          | `false` |
| closable       | 是否允许关闭                                  | `boolean`          | `true`  |
| fullscreenable | 是否允许全屏                                  | `boolean`          | `true`  |
| width          | 抽屉的宽度，在位置是 `left` 和 `right` 时生效 | `number \| string` | `300`   |
