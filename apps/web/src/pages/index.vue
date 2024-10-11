<script setup lang="ts">
const { t } = useI18n()
const [loading, toggle] = useToggle()
const { info } = userApi()
const data = ref()
async function request() {
  toggle()
  data.value = await info()
  toggle()
}
request()
</script>

<template>
  <div class="p-16px">
    <NCard :bordered="false">
      <NFlex>
        <NButton>
          {{ t('hello') }}
        </NButton>

        <NDatePicker />
      </NFlex>

      <NDivider />

      <NDataTable />

      <NDivider />

      <NAlert :show-icon="false">
        <div v-if="loading">
          请求中...
        </div>
        <pre v-else>{{ data }}</pre>
      </NAlert>
    </nCard>
  </div>
</template>
