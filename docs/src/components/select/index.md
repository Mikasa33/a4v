# 选择器 Select

选点啥！

## 演示

### 基础

支持异步请求的基础用法。

<SelectBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

### 立即加载

选择器还可以立即加载选项。

<SelectImmediate />

::: details 查看代码
<<< ./demos/Immediate.vue
:::

## API

### Select Props

支持 [NSelect](https://www.naiveui.com/zh-CN/light/components/select#Select-Props) 所有属性。

| 名称       | 说明                                           | 类型                                                                                    | 默认值      |
| ---------- | ---------------------------------------------- | --------------------------------------------------------------------------------------- | ----------- |
| immediate  | 是否立即请求数据，默认为打开选项菜单才开始请求 | `boolean`                                                                               | `false`     |
| on-request | 异步请求数据的回调函数                         | `(params: Record<string, any>) => Promise<Array<NSelectOption \| NSelectGroupOption>>>` | `undefined` |
