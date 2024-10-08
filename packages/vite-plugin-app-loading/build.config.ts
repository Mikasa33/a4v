import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    'src/index',
    {
      builder: 'mkdist',
      input: 'src/template.html',
      outDir: 'dist/template.html',
    },
  ],
  externals: ['vite'],
  rollup: {
    emitCJS: true,
  },
})
