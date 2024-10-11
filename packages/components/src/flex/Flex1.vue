<script setup lang="ts">
import { useCssr } from '../composables'
import { cssr } from './cssr'

useCssr(cssr)
</script>

<template>
  <div class="a-flex-1" />
</template>
