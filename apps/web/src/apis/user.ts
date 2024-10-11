import axios from 'axios'

const namespace = '/api/user'

export function userApi() {
  return {
    info: async () => await axios.get(`${namespace}/info`),
  }
}
