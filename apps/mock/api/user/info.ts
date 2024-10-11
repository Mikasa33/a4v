export default defineEventHandler(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          id: 1,
          username: 'admin',
          nickName: '管理员',
        },
        message: 'ok',
      })
    }, 1000)
  })
})
