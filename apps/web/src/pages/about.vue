<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="p-16px">
    <NCard :bordered="false">
      <NButton>
        {{ t('about') }}
      </NButton>
    </NCard>
  </div>
</template>
