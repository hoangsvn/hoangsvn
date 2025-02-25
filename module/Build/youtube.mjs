import * as esbuild from 'esbuild'

esbuild.buildSync({
  entryPoints: {
    youtube: 'index.js'
  },
  bundle: true,
  minify: true,
  banner: { js: `// Build Youtube Start: ${new Date().toLocaleString()}` },
  footer: { js: `// Build Youtube End: ${new Date().toLocaleString()}` },
  sourcemap: false,
  outdir: './dist'
})
