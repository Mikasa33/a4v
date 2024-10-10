import { c, cB, cE } from '../utils'

export const cssr = c([
  cB('table', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  }, [
    cE('header', {
      marginBottom: '12px',
    }),
    cE('table', {
      flex: '1 1 0%',
    }),
  ]),
])
