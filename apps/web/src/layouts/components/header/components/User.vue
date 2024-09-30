<script setup lang="ts">
import { usePreference } from '@a4v/preference'
import { renderIcon } from '@a4v/utils'

const dialog = useDialog()
// const { logout } = useAuthStore()

const { info, isDark } = usePreference()
// const { userInfo } = storeToRefs(useAuthStore())

const options = [
  {
    key: 'me',
    label: '个人中心',
    icon: () => renderIcon('i-icon-park-outline-user'),
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    label: '退出登录',
    icon: () => renderIcon('i-icon-park-outline-logout'),
  },
]

function handleSelect(key: string) {
  switch (key) {
    case 'logout':
      dialog.warning({
        autoFocus: false,
        title: '提示',
        content: '是否确认退出登录？',
        positiveText: '确认',
        negativeText: '取消',
        onPositiveClick: () => {
          // logout()
        },
      })
      break
  }
}
</script>

<template>
  <NDropdown
    :options="options"
    trigger="click"
    @select="handleSelect"
  >
    <NEl
      :class="{ 'hover:bg-[var(--hover-color)] active:bg-[var(--hover-color)]': !isDark && info.header.inverted }"
      class="h-42px max-w-150px flex-center cursor-pointer rounded-full bg-[var(--button-color-2)] px-8px transition-300 active:bg-[var(--button-color-2-pressed)] dark:(bg-[var(--button-color-2)] active:bg-[var(--button-color-2)] hover:bg-[var(--button-color-2-hover)]) hover:bg-[var(--button-color-2-hover)]"
    >
      <NAvatar
        src="https://avatars.githubusercontent.com/u/108928776?s=80&v=4"
        round
        class="mr-8px h-28px min-w-28px w-28px bg-transparent"
      />
      <NEllipsis>
        <!-- {{ userInfo?.nickName }} -->
      </NEllipsis>
    </NEl>
  </NDropdown>
</template>
