import * as esbuild from 'esbuild'

const now = new Date().toLocaleString()
const debug = false

esbuild.buildSync({
  entryPoints: ['./src/spotify-proto.ts'],
  bundle: true,
  minify: !debug,
  banner: { js: `// Build Spotify: ${now}` },
  sourcemap: false,
  outfile: './dist/spotify.js'
})
