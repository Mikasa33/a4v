import { c, cB, cE, cM } from '../utils'

export const cssr = c([
  cB('tree', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  }, [
    cE('header', {
      marginBottom: '8px',
    }),
    cE('tree', [
      cM('loading', {
        opacity: '0.5',
        pointerEvents: 'none',
      }),
    ]),
    cE('empty', [
      cM('loading', {
        opacity: '0',
      }),
    ]),
  ]),
])
