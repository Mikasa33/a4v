# 展示标签 View Tag

一个格式化并展示标签的小组件。

## 演示

### 基础

格式化并展示标签。

<ViewTagBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

## API

### ViewTag Props

支持 [NTag](https://www.naiveui.com/zh-CN/light/components/tag#Tag-Props) 所有属性。

| 名称    | 说明                       | 类型            | 默认值  |
| ------- | -------------------------- | --------------- | ------- |
| options | 选项，不配置则显示 `value` | `NSelectOption` | `[]`    |
| value   | 标签值                     | `boolean`       | `false` |
