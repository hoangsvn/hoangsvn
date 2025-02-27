import * as esbuild from 'esbuild'

esbuild.buildSync({
  entryPoints: {
    b612: './src/b612.js'
  },
  bundle: true,
  minify: true,
  banner: { js: `// Build B612 Start: ${new Date().toLocaleString()}` },
  footer: { js: `// Build B612 End: ${new Date().toLocaleString()}` },
  sourcemap: false,
  outdir: './dist'
})
