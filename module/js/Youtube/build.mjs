import * as esbuild from 'esbuild'

esbuild.buildSync({
  entryPoints: ['index.ts'],
  bundle: true,
  minify: true,
  banner: { js: `// Build Youtube Start: ${new Date().toLocaleString()}` },
  footer: { js: `// Build Youtube End: ${new Date().toLocaleString()}` },
  // inject: ['./lib/text-polyfill.mjs'],
  sourcemap: false,
  outfile: './dist/youtube.js'
})
