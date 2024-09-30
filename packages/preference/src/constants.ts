import type { PageAnimateMode, PreferenceInfo } from './types'

export const defaultPreference: PreferenceInfo = {
  colorMode: 'auto',
  darkThemeColor: {
    primaryColor: '#63E2B7',
    infoColor: '#70C0E8',
    successColor: '#63E2B7',
    warningColor: '#F2C97D',
    errorColor: '#E88080',
  },
  footer: {
    show: true,
    height: 64,
    inverted: false,
  },
  header: {
    show: true,
    height: 64,
    inverted: false,
  },
  layoutMode: 'vertical',
  lightThemeColor: {
    primaryColor: '#18A058',
    infoColor: '#2080F0',
    successColor: '#18A058',
    warningColor: '#F0A020',
    errorColor: '#D03050',
  },
  page: {
    animate: true,
    animateMode: 'fade-slide',
    loadingBar: true,
  },
  sidebar: {
    show: true,
    width: 240,
    collapsedWidth: 64,
    collapsed: false,
    inverted: false,
  },
}

export const pageAnimateModeOptions: { value: PageAnimateMode, label: string }[] = [
  { value: 'fade', label: '淡入淡出' },
  { value: 'fade-slide', label: '滑动' },
  { value: 'fade-top', label: '顶部消退' },
  { value: 'fade-bottom', label: '底部消退' },
]
