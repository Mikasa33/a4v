<script lang="ts" setup>
import { AViewTag } from '@a4v/components'
import { NFlex } from 'naive-ui'

const value = 'male'
const options = [
  { label: '男 male', value: 'male' },
  { label: '女 female', value: 'female' },
]
</script>

<template>
  <NFlex>
    <AViewTag
      :value
      :options
      round
      type="success"
    />
    <AViewTag :value />
  </NFlex>
</template>
