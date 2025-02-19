import * as esbuild from 'esbuild'

const now = new Date().toLocaleString()
const debug = false

esbuild.buildSync({
  entryPoints: ['index.ts'],
  bundle: true,
  minify: !debug,
  banner: { js: `// Build: ${now}` },
  sourcemap: false,
  outfile: './dist/youtube.js'
})
