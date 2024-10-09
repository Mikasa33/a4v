import type { DrawerProps, DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption, ModalProps, PopoverProps } from 'naive-ui'
import type { PropType } from 'vue'
import type { AdvTableFilterPresetType } from '../adv-table'
import type { FormProps } from '../form'
import type { SearchKeywordProps } from '../search-keyword'
import { treeProps } from '../tree'
import { makeArrayProp, makeObjectProp, truthProp } from '../utils'

export const advTreeProps = Object.assign({}, treeProps, {
  filterable: Boolean,
  filterFormProps: makeObjectProp<FormProps>(),
  filterPopupProps: makeObjectProp<DrawerProps | ModalProps | PopoverProps>(),
  filterPreset: {
    type: String as PropType<AdvTableFilterPresetType>,
    default: 'drawer',
  },
  nodeActions: makeArrayProp<string | DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption>(['edit', 'delete']),
  refreshable: truthProp,
  searchable: Boolean,
  searchProps: makeObjectProp<SearchKeywordProps>(),
})
