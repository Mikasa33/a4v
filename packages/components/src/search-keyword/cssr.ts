import { c, cB, cE } from '../utils'

export const cssr = c([
  cB('search-keyword', {
    width: 'auto',
  }, [
    cE('select', {
      width: 'auto',
    }),
    cE('input', {
      flex: '1 1 0%',
    }),
    cE('icon', {
      marginRight: '4px',
    }),
  ]),
])
