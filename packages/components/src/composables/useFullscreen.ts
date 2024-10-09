import { type MaybeElementRef, useScrollLock } from '@vueuse/core'
import { ref, toValue } from 'vue'

export function useFullscreen(target: MaybeElementRef) {
  const isLocked = useScrollLock(document.body)
  const isFullscreen = ref(false)
  const style = ref('')

  function enter() {
    const t = toValue(target) as any
    const el = t?.$el ?? t
    style.value = el.style
    el.style.position = 'fixed'
    el.style.top = '0'
    el.style.left = '0'
    el.style.width = '100%'
    el.style.height = '100%'
    isFullscreen.value = true
    isLocked.value = true
  }

  function exit() {
    const t = toValue(target) as any
    const el = t?.$el ?? t
    el.style = style.value
    isFullscreen.value = false
    isLocked.value = false
  }

  function toggle() {
    if (toValue(target)) {
      if (isFullscreen.value) {
        exit()
      }
      else {
        enter()
      }
    }
  }

  return {
    isFullscreen,
    enter,
    exit,
    toggle,
  }
}
