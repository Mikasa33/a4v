import type { PropType } from 'vue'
import { reactivePick } from '@vueuse/core'

export const unknownProp = null as unknown as PropType<unknown>

export const numericProp = [Number, String]

export const truthProp = {
  type: Boolean,
  default: true as const,
}

export function makeRequiredProp<T>(type: T) {
  return {
    type,
    required: true as const,
  }
}

export function makeArrayProp<T>(defaultVal = [] as T[]) {
  return {
    type: Array as PropType<T[]>,
    default: () => defaultVal,
  }
}

export function makeFunctionProp<T>(defaultVal?: T) {
  return {
    type: Function as PropType<T>,
    default: defaultVal,
  }
}

export function makeNumberProp<T>(defaultVal: T) {
  return {
    type: Number,
    default: defaultVal,
  }
}

export function makeNumericProp<T>(defaultVal: T) {
  return {
    type: numericProp,
    default: defaultVal,
  }
}

export function makeObjectProp<T>(defaultVal = {} as T) {
  return {
    type: Object as PropType<T>,
    default: () => defaultVal,
  }
}

export function makeStringProp<T>(defaultVal: T) {
  return {
    type: String,
    default: defaultVal,
  }
}

export function pickProps<T = any>(props: any, pk: any) {
  return reactivePick(props, ...Object.keys(pk)) as T
}
