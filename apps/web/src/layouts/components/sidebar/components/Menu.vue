<script setup lang="ts">
import { menus } from '#/settings/menu'
import { usePreference } from '@a4v/preference'
import { renderIcon } from '@a4v/utils'

const route = useRoute()
const router = useRouter()

const selected = computed(() => route.path)
const expandedKeys = ref([])
const options = computed(() => processMenu(menus))

// watch(
//   selected,
//   () => {
//     expandedKeys.value = findParentNodes(menus, selected.value)?.map((item: any) => item.key)
//   },
//   {
//     immediate: true,
//   },
// )

const { info } = usePreference()

function handleSelect(key: string, option: any) {
  if (option.url) {
    window.open(option.url, '_blank')
    return
  }

  router.push(key)
}

function processMenu(nodes: any[]) {
  return nodes.map((node) => {
    const newNode = { ...node }
    newNode.icon = () => renderIcon(node.icon)
    if (newNode.children?.length)
      newNode.children = processMenu(newNode.children)
    return newNode
  })
}
</script>

<template>
  <NScrollbar>
    <NMenu
      v-model:expanded-keys="expandedKeys"
      :value="selected"
      :options="options"
      :collapsed="info.sidebar.collapsed"
      :collapsed-width="info.sidebar.collapsedWidth"
      :collapsed-icon-size="20"
      :icon-size="18"
      :indent="23"
      :inverted="info.sidebar.inverted"
      @update:value="handleSelect"
    />
  </NScrollbar>
</template>
