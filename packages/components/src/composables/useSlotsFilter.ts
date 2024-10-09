import type { ComputedRef } from 'vue'
import { computed, useSlots } from 'vue'

export interface useSlotsFilterReturn {
  /**
   * 筛选后的插槽 key
   */
  slotKeys: ComputedRef<string[]>
  /**
   * 筛选后的插槽
   */
  slots: ComputedRef<Record<string, any>>
}

/**
 * 筛选插槽
 * @param fn 筛选条件
 */
export function useSlotsFilter(fn: (key: string) => boolean): useSlotsFilterReturn {
  const _slots = useSlots()
  const slotKeys = computed(() => {
    return Object.keys(_slots).filter(fn)
  })
  const slots = computed(() => {
    return slotKeys.value.reduce((acc, key) => {
      acc[key] = _slots[key]
      return acc
    }, {} as Record<string, any>)
  })
  return {
    slotKeys,
    slots,
  }
}
