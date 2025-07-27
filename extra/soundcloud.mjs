import * as esbuild from 'esbuild'
import fs from 'fs';

const outputFile = '../module/soundcloud.module';
const data = [
    '#!url=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/module/spotify.module',
    '#!name=Spotify',
    '#!desc=Active Premium',
    '#!date=' + new Date().toLocaleString(),
    '',
    '[MITM]',
    'hostname = %APPEND% spclient.wg.spotify.com',
    '',
    '[Script]',
    '',
    'SpotifyJson = type=http-request,type=http-request,pattern=^https:\\/\\/spclient\\.wg\\.spotify\\.com\\/(artistview\\/v1\\/artist|album-entity-view\\/v2\\/album)\\/,requires-body=0,script-path=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/extra/dist/spotifyjson.js',
    'SpotifyProto = type=http-response,pattern=^https:\\/\\/spclient\\.wg\\.spotify\\.com\\/(bootstrap\\/v1\\/bootstrap|user-customization-service\\/v1\\/customize)$,requires-body=1,binary-mode=1,max-size=0,script-path=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/extra/dist/spotifyproto.js,script-update-interval=0'
]
fs.writeFileSync(outputFile, data.join("\n"), "utf-8")

esbuild.buildSync({
    entryPoints: {
        soundcloud: './src/soundcloud.js'
    },
    bundle: true,
    minify: true,
    banner: {js: `// Build Soundcloud Start: ${new Date().toLocaleString()}`},
    footer: {js: `// Build Soundcloud End: ${new Date().toLocaleString()}`},
    sourcemap: false,
    outdir: './dist'
})
