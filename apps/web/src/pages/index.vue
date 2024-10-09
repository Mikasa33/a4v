<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="m-16px">
    <NCard :bordered="false">
      <NFlex>
        <NButton>
          {{ t('hello') }}
        </NButton>

        <NDatePicker />
      </NFlex>

      <NDivider />

      <NDataTable />
    </NCard>
  </div>
</template>
