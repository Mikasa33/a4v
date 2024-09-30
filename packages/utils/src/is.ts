export type Numeric = number | string

export function isNumeric(val: Numeric): val is string {
  return typeof val === 'number' || /^\d+(?:\.\d+)?$/.test(val)
}
