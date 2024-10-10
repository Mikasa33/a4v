import { c, cB, cE } from '../utils'

export const cssr = c([
  cB('adv-tree', {
    display: 'flex',
    flex: '1 1 0%',
    width: '100%,',
    height: '100%',
  }, [
    cE('tree', {
      width: '100%',
    }, [
      c('.n-tree-node-content', {
        paddingRight: '0',
      }),
      cE('button', {
        padding: '0 !important',
        width: '34px !important',
        height: '34px !important',
      }),
    ]),
    cE('search-keyword', {
      flex: '1 1 0%',
    }),
    cE('dropdown', {
      minWidth: '80px',
    }),
    cE('icon', {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: 'var(--n-node-content-height)',
      fontSize: '16px',
    }),
  ]),
])
