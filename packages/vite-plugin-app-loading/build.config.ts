import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    'src/index',
    'src/utils',
    {
      builder: 'copy',
      input: 'src/assets',
      outDir: 'dist/assets',
    },
  ],
  externals: ['vite'],
  rollup: {
    emitCJS: true,
  },
})
