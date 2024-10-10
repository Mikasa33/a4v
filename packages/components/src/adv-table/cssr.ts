import { c, cB, cE, cM } from '../utils'

export const cssr = c([
  cB('adv-table', {
    display: 'flex',
    flex: '1 1 0%',
    width: '100%,',
    height: '100%',
  }, [
    cM('fullscreen', {
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '24px',
      paddingRight: '24px',
      zIndex: '1000',
    }),
    cE('table', {
      flex: '1 1 0%',
    }, [
      cE('button', {
        padding: '0 !important',
        width: '34px !important',
        height: '34px !important',
      }),
    ]),
  ]),
])
