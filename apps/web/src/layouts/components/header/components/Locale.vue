<script setup lang="ts">
import { TooltipBtn } from '../../index'

const { locale } = useI18n()

const showDropdown = ref(false)
const options = [
  {
    key: 'zh-CN',
    label: '中文',
  },
  {
    key: 'en',
    label: 'English',
  },
]
function handleSelect(key: string) {
  locale.value = key
}

const [showTooltip, toggleShowTooltip] = useToggle()
</script>

<template>
  <NDropdown
    v-model:show="showDropdown"
    :value="locale"
    :options="options"
    trigger="click"
    @select="handleSelect"
  >
    <div>
      <TooltipBtn v-model:show="showTooltip" @click="toggleShowTooltip(false)">
        <template #trigger>
          <div class="i-icon-park-outline-translate" />
        </template>
        语言切换
      </TooltipBtn>
    </div>
  </NDropdown>
</template>
