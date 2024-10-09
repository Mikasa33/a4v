# 表单 Form

收集、验证信息。

## 演示

### 基础

基础表单。

<FormBasic />

::: details 查看代码
<<< ./demos/Basic.vue
:::

### 默认值

设置表单默认值，当 `value[path]` 为 `undefined` 时才会设置默认值，优先级 `item.defaultValue` > `form.defaultValues`。

<FormDefaultValue />

::: details 查看代码
<<< ./demos/DefaultValue.vue
:::

### 栅格布局

设置表单布局，优先级 `item.span` > `form.giSpan`。

<FormGrid />

::: details 查看代码
<<< ./demos/DefaultValue.vue
:::

### 折叠

折叠表单项。

<FormCollapse />

::: details 查看代码
<<< ./demos/Collapse.vue
:::

### 表单项组件

使用组件自定义表单项。

<FormComponent />

::: details 查看代码
<<< ./demos/Component.vue
:::

### 表单项插槽

使用插槽自定义表单项，优先级 `slot` > `component`。

<FormSlotItem />

::: details 查看代码
<<< ./demos/SlotItem.vue
:::

### 表单项显示隐藏

控制表单项的显示或隐藏。

<FormVisible />

## API

### Form Props

支持 [NGrid](https://www.naiveui.com/zh-CN/light/components/grid#Grid-Props) 和 [NForm](https://www.naiveui.com/zh-CN/light/components/form#Form-Props) 除 `model` 外的所有属性。

| 名称                   | 说明                                               | 类型                                   | 默认值      |
| ---------------------- | -------------------------------------------------- | -------------------------------------- | ----------- |
| default-values         | 默认值                                             | `object`                               | `{}`        |
| gi-span                | 栅格占据的列数，为 `0` 的时候会隐藏                | `number \| string`                     | `24`        |
| gi-suffix-span         | 栅格后缀占据的列数，默认为 `gi-span` 的值          | `number \| string`                     | `undefined` |
| items                  | 表单项，属性参考 [FormItem Props](#formitem-props) | `FormItemProps`                        | `[]`        |
| require-mark-placement | 必填星号的位置                                     | `'left' \| 'right' \| 'right-hanging'` | `'left'`    |
| value                  | 获取表项中收集到的值的对象                         | `object`                               | `{}`        |
| on-update:value        | 表项中收集到的值的对象改变时触发的回调函数         | `(value: any) => void`                 | `undefined` |

### FormItem Props

支持 [NFormItem && NFormItemGi](https://www.naiveui.com/zh-CN/light/components/form#FormItem-Props) 所有属性。

| 名称            | 说明                                                                       | 类型                                                                       | 默认值      |
| --------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------- |
| component       | 组件或组件名称，类型参考 [FormItemComponent Type](#formitemcomponent-type) | `FormItemComponentType`                                                    | `undefined` |
| component-props | 组件 props                                                                 | `any`                                                                      | `undefined` |
| default-value   | 默认值                                                                     | `any`                                                                      | `null`      |
| show            | 是否显示                                                                   | `boolean \| ({ value, item }: { value: object, path: string }) => boolean` | `true`      |
| slot            | 插槽名称，优先级大于 `path` 属性对应的插槽                                 | `string`                                                                   | `undefined` |

### FormItemComponent Type

```ts
import type { Component } from 'vue'

type FormItemComponentType =
  | 'NAutoComplete'
  | 'NCascader'
  | 'NColorPicker'
  | 'NDatePicker'
  | 'NDynamicInput'
  | 'NInput'
  | 'NInputNumber'
  | 'NSelect'
  | 'NSlider'
  | 'NSwitch'
  | 'NTimePicker'
  | 'NTreeSelect'
  | Component
```

### Form Methods

支持 [NForm](https://www.naiveui.com/zh-CN/light/components/form#Form-Methods) 所有方法。

| 名称     | 说明                                                                 | 类型                     |
| -------- | -------------------------------------------------------------------- | ------------------------ |
| getValue | 获取表项中收集到的值的对象，如果传递 `path` 则获取对象中对应路径的值 | `(path?: string) => any` |
| reset    | 重置为默认值，并还原到未校验的状态                                   | `() => void`             |

### Form Slots

| 名称                 | 说明         | 参数                                                                   |
| -------------------- | ------------ | ---------------------------------------------------------------------- |
| item-$\{path\|slot\} | 表单项内容   | `({ props: FormItemProps, path: string, model: Record<string, any> })` |
| gi-suffix            | 栅格后缀内容 | `({ overflow: boolean })`                                              |
