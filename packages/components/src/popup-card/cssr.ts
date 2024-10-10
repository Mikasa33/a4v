import { c, cB, cE, cM } from '../utils'

export const cssr = c([
  cB('popup-card', {
    height: '100%',
  }, [
    cM('fullscreen', {
      borderRadius: '0 !important',
    }),
    cE('content', {
      padding: '0 !important',
      overflow: 'hidden',
    }, [
      cM('footer', {
        marginBottom: '20px',
      }),
    ]),
    c([
      cB('popup-card-header', [
        cE('button', {
          padding: '0 !important',
          width: '24px !important',
          height: '24px !important',
        }),
        cE('icon', {
          fontSize: '16px',
        }),
      ]),
    ]),
    cE('scrollbar', {
      paddingLeft: '24px',
      paddingRight: '24px',
    }, [
      cM('footer', {
        marginBottom: '20px',
      }),
    ]),
  ]),
])
