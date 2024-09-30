import { h } from 'vue'

export function renderIcon(icon: string, className?: string) {
  return h('div', { class: [icon, className] })
}
