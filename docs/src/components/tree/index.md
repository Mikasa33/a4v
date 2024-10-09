# 树 Tree

用来获取异步请求的树形结构数据，并展示在树中。

如果只是想渲染一个树，建议直接使用 [NTree](https://www.naiveui.com/zh-CN/light/components/tree)。

## 演示

### 基础

基础树。

<TreeBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

### 节点内容插槽

使用节点内容插槽，自定义节点列。优先级 `slot` > `renderLabel` > `label`。

<TreeSlotLabel />

::: details 查看代码
<<< ./demos/SlotLabel.vue
:::

## API

### Tree Props

支持 [NTree](https://www.naiveui.com/zh-CN/light/components/tree#Tree-Props) 所有属性。

| 名称              | 说明                               | 类型                                                      | 默认值      |
| ----------------- | ---------------------------------- | --------------------------------------------------------- | ----------- |
| immediate         | 是否立即请求数据                   | `boolean`                                                 | `false`     |
| loading           | 是否显示 `loading` 状态            | `boolean`                                                 | `false`     |
| on-request        | 异步请求数据的回调函数             | `(params: Record<string, any>) => Promise<NTreeOption[]>` | `undefined` |
| on-update:loading | `loading` 状态改变时触发的回调函数 | `(loading: boolean) => void`                              | `undefined` |

### Table Slots

支持 [NTree](https://www.naiveui.com/zh-CN/light/components/tree#Tree-Slots) 所有插槽。

| 名称           | 说明     | 参数                                                            |
| -------------- | -------- | --------------------------------------------------------------- |
| label-$\{key\} | 节点内容 | `({ option: TreeOption, checked: boolean, selected: boolean })` |
