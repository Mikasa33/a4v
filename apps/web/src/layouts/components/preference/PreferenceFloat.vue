<script setup lang="ts">
import { Drawer } from './components'

const [show, toggle] = useToggle()
</script>

<template>
  <NFloatButton type="primary" :right="0" :bottom="100" shape="square" class="!rounded-br-0 !rounded-tr-0" @click="toggle()">
    <div class="i-icon-park-outline-platte" />
  </NFloatButton>

  <Drawer v-model:show="show" />
</template>
