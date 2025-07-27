import * as esbuild from 'esbuild'
import fs from 'fs';

const outputFile = '../module/soundcloud.module';
const data = [
    '﻿#!url=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/module/soundcloud.module',
    '#!name=SoundCloud',
    '#!desc=Active Go++',
    '#!date=' + new Date().toLocaleString(),
    '',
    '[MITM]',
    'hostname= %APPEND% api-mobile.soundcloud.com',
    '',
    '[Script]',
    '',
    'SoundCloud=type=http-response,pattern=https://api-mobile.soundcloud.com/configuration/ios,requires-body=1,script-path=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/extra/dist/soundcloud.js'
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
