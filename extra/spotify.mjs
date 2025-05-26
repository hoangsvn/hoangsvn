import * as esbuild from 'esbuild'

esbuild.buildSync({
  entryPoints: {
    spotifyproto: './src/spotifyproto.js',
    spotifyjson: './src/spotifyjson.js'
  },
  bundle: true,
  minify: true,
  banner: { js: `// Build Spotify Start: ${new Date().toLocaleString()}` },
  footer: { js: `// Build Spotify End: ${new Date().toLocaleString()}` },
  sourcemap: false,
  outdir: './dist'
})
