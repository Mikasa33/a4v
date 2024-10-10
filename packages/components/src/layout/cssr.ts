import { c, cB, cM } from '../utils'

export const cssr = c([
  cB('layout', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }),
  cB('layout-sidebar', {
    boxSizing: 'border-box',
    height: '100%',
    overflow: 'hidden',
  }, [
    c('&-container', {
      position: 'absolute',
      height: '100%',
      transition: '300ms',
      transitionProperty: 'width, padding',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }),
    c('&-enter-active, &-leave-active', {
      transition: 'all 0.3s',
    }),
    c('&-enter-from, &-leave-to', {
      opacity: 0,
      transform: 'var(--a-layout-sidebar-transform)',
    }),
    cM('vertical', {
      zIndex: 9,
    }),
  ]),
  cB('layout-header', {
    boxSizing: 'border-box',
    height: '100%',
    overflow: 'hidden',
  }, [
    c('&-container', {
      flexGrow: 1,
      height: '100%',
      transition: '300ms',
      transitionProperty: 'padding',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }),
    cM('horizontal', {
      zIndex: 9,
    }),
  ]),
  cB('layout-content', {
    boxSizing: 'border-box',
    height: '100%',
    overflow: 'hidden',
  }, [
    c('&-container', {
      transition: '300ms',
      transitionProperty: 'padding',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }),
  ]),
  cB('layout-footer', {
    boxSizing: 'border-box',
    height: '100%',
    overflow: 'hidden',
  }, [
    c('&-container', {
      flexShrink: 1,
      height: '100%',
      transition: '300ms',
      transitionProperty: 'padding',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }),
  ]),
])
