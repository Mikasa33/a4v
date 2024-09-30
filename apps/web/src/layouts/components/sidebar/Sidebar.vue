<script setup lang="ts">
import { usePreference } from '@a4v/preference'
import { Logo } from '../index'
import { Menu } from './components'

const { info } = usePreference()
</script>

<template>
  <div class="wh-full flex flex-col">
    <Logo v-if="info.layoutMode === 'vertical'" />
    <Menu />
  </div>
</template>
