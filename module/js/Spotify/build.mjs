import * as esbuild from 'esbuild'
const now = new Date().toLocaleString()

esbuild.buildSync({
  entryPoints: ['./src/spotify-proto.js'],
  bundle: true,
  minify: true,
  banner: { js: `// Build Spotify: ${now}` },
  sourcemap: false,
  outfile: './dist/spotifyproto.js'
})
