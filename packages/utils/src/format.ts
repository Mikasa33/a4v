import type { Numeric } from './is'
import { isNil } from 'lodash-es'
import { isNumeric } from './is'

export function addUnit(value?: Numeric): string | undefined {
  if (!isNil(value)) {
    return isNumeric(value) ? `${value}px` : String(value)
  }
  return undefined
}

// export function getMaybeFuncValue(val: any, params: any) {
//   if (isFunction(val)) {
//     return val(params)
//   }
//   return val
// }

export function convertPath2Object(path: string, value?: any) {
  const obj: any = {}
  let current = obj
  const parts = path.split('.')
  for (let i = 0; i < parts.length; i++) {
    if (i === parts.length - 1) {
      current[parts[i]] = value
    }
    else {
      current[parts[i]] = current[parts[i]] || {}
      current = current[parts[i]]
    }
  }
  return obj
}
