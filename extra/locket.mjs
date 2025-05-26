import * as esbuild from 'esbuild'

esbuild.buildSync({
  entryPoints: {
    locket: './src/locket.js'
  },
  bundle: true,
  minify: true,
  banner: { js: `// Build Locket Start: ${new Date().toLocaleString()}` },
  footer: { js: `// Build Locket End: ${new Date().toLocaleString()}` },
  sourcemap: false,
  outdir: './dist'
})
