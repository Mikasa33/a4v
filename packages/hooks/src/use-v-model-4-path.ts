import { convertPath2Object } from '@a4v/utils'
import { get } from 'lodash-es'
import { computed, toValue } from 'vue'

export function useVModel4Path(props: any, path: string, update: (value: any) => void) {
  const value = computed(() => get(toValue(props), path))

  function onUpdateValue(val: any) {
    update?.(convertPath2Object(path, val))
  }

  return computed({
    get() {
      return value.value
    },
    set(value) {
      onUpdateValue(value)
    },
  })
}
