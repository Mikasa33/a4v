<script setup lang="ts">
import { usePreference } from '@a4v/preference'
import { Logo } from '../index'
import { Preference } from '../preference'
import { Collapse, ColorMode, Fullscreen, Github, Locale, User } from './components'

const { info } = usePreference()
</script>

<template>
  <div class="wh-full flex items-center justify-between">
    <div class="flex-y-center">
      <Logo v-if="info.layoutMode !== 'vertical'" />
      <NFlex
        align="center"
        :wrap="false"
        :class="info.layoutMode === 'vertical' && (info.sidebar.inverted ? 'ml-16px' : 'ml-0')"
        class="transition-300 transition-property-margin"
      >
        <Collapse v-if="info.layoutMode !== 'horizontal'" />
        <!-- <Breadcrumb /> -->
      </NFlex>
    </div>
    <NFlex :wrap="false" align="center" class="mr-16px">
      <Github />
      <Locale />
      <Fullscreen />
      <ColorMode />
      <Preference />
      <User />
    </NFlex>
  </div>
</template>
