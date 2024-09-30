import { definePreset, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

export const presetA4v = definePreset(() => {
  return {
    name: 'unocss-preset-a4v',
    presets: [
      presetUno,
      presetIcons({
        warn: true,
      }),
    ],
    shortcuts: {
      'flex-center': 'flex items-center justify-center',
      'flex-x-center': 'flex justify-center',
      'flex-y-center': 'flex items-center',
      'wh-full': 'w-full h-full',
      'transition-300': 'ease-in-out duration-300',
    },
    transformers: [
      transformerVariantGroup(),
    ],
  }
})

export default presetA4v
