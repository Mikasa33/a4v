<script setup lang="ts">
import { ALayout } from '@a4v/components'
import { usePreference } from '@a4v/preference'
import { Header, PreferenceFloat, Sidebar } from './components'

const { info, isDark } = usePreference()

const contentClass = computed(() => {
  const { layoutMode, sidebar, header, footer } = info.value
  if (layoutMode === 'horizontal' || !sidebar.show || (!isDark.value && sidebar.inverted)) {
    return null
  }
  const headerClass = header.show && (isDark.value || !header.inverted) ? 'rounded-tl-12px' : null
  const footerClass = footer.show && (isDark.value || !footer.inverted) ? 'rounded-bl-12px' : null
  return `${headerClass} ${footerClass}`
})
</script>

<template>
  <ALayout
    :collapsed="info.sidebar.collapsed"
    :mode="info.layoutMode.includes('horizontal') ? 'horizontal' : 'vertical'"
    :show-footer="info.footer.show"
    :show-header="info.header.show"
    :show-sidebar="info.sidebar.show && info.layoutMode !== 'horizontal'"
    :sidebar-collapsed-width="info.sidebar.collapsedWidth"
    :sidebar-width="info.sidebar.width"
    :header-height="info.header.height"
    :footer-height="info.footer.height"
    :footer-class="{ 'bg-#001427 text-#ffffffd1': !isDark && info.footer.inverted }"
    :header-class="{ 'bg-#001427 text-#ffffffd1': !isDark && info.header.inverted }"
    :sidebar-class="{ 'bg-#001427 text-#ffffffd1': !isDark && info.sidebar.inverted }"
    :content-class="contentClass"
    class="!h-100vh dark:bg-#18181c"
  >
    <template #sidebar>
      <Sidebar />
    </template>

    <template #header>
      <Header />
    </template>

    <NEl class="wh-full flex flex-col overflow-hidden bg-[var(--hover-color)] dark:bg-[var(--body-color)]">
      <RouterView #="{ Component, route }">
        <Transition appear mode="out-in" :name="info.page.animate ? info.page.animateMode : undefined">
          <NScrollbar>
            <Component :is="Component" :key="route.path" class="wh-full flex" />
          </NScrollbar>
        </Transition>
      </RouterView>
    </NEl>

    <PreferenceFloat v-if="!info.header.show" />

    <template #footer>
      <div class="wh-full flex-center">
        footer
      </div>
    </template>
  </ALayout>
</template>
