# 抽屉 Drawer

我感觉和 Modal 功能差不太多，位置有点差别。

## 演示

### 基础

基础抽屉用法。

<DrawerBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

## API

### Drawer Props

支持 [NDrawer](https://www.naiveui.com/zh-CN/light/components/drawer#Drawer-Props) 和 [NCard](https://www.naiveui.com/zh-CN/light/components/card#Card-Props) 所有属性。

| 名称           | 说明                                          | 类型               | 默认值  |
| -------------- | --------------------------------------------- | ------------------ | ------- |
| auto-focus     | 是否自动聚焦 Drawer 第一个可聚焦的元素        | `boolean`          | `false` |
| bordered       | 是否显示卡片边框                              | `boolean`          | `false` |
| closable       | 是否允许关闭                                  | `boolean`          | `true`  |
| fullscreenable | 是否允许全屏                                  | `boolean`          | `true`  |
| width          | 抽屉的宽度，在位置是 `left` 和 `right` 时生效 | `number \| string` | `300`   |
