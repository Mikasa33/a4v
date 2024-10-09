<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="m-16px">
    <NCard :bordered="false">
      <NButton>
        {{ t('about') }}
      </NButton>
    </NCard>
  </div>
</template>
