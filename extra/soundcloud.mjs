import * as esbuild from 'esbuild'

esbuild.buildSync({
  entryPoints: {
    soundcloud: './src/soundcloud.js'
  },
  bundle: true,
  minify: true,
  banner: { js: `// Build Soundcloud Start: ${new Date().toLocaleString()}` },
  footer: { js: `// Build Soundcloud End: ${new Date().toLocaleString()}` },
  sourcemap: false,
  outdir: './dist'
})
