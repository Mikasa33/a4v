/**
 * 成功日志
 *
 * @param {string} text 内容
 */
export function successLog(text) {
  console.log(`\x1B[32m${text}\x1B[0m`)
}

/**
 * 错误日志
 *
 * @param {string} text 内容
 */
export function errorLog(text) {
  console.log(`\x1B[31m${text}\x1B[0m`)
}
