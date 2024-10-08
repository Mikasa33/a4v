/**
 * 成功日志
 *
 * @param {string} text 内容
 */
export function success(text) {
  console.log(`\x1B[32m${text}\x1B[0m`)
}

/**
 * 错误日志
 *
 * @param {string} text 内容
 */
export function error(text) {
  console.log(`\x1B[31m${text}\x1B[0m`)
}

export default { success, error }
