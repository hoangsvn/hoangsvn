import * as esbuild from 'esbuild'

const now = new Date().toLocaleString()
const debug = false

esbuild.buildSync({
  entryPoints: ['./src/spotify-proto.js'],
  bundle: true,
  minify: !debug,
  banner: { js: `// Build Spotify: ${now}` },
  sourcemap: false,
  outfile: './dist/spotify.js'
})
