import * as esbuild from 'esbuild'
import fs from 'fs';

const outputFile = '../module/soundcloud.module';

// Build soundcloud.js trước
esbuild.buildSync({
    entryPoints: {
        soundcloud: './src/soundcloud.js'
    },
    bundle: true,
    minify: true,
    sourcemap: false,
    outdir: './dist'
});

// Đọc nội dung script đã build
const scriptCode = fs.readFileSync('./dist/soundcloud.js', 'utf-8');

const data = [
    '#!url=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/module/soundcloud.module',
    '#!name=SoundCloud Go++',
    '#!desc=build:' + new Date().toLocaleString(),
    '',
    '[MITM]',
    'hostname= %APPEND% api-mobile.soundcloud.com',
    '',
    '[Script]',
    '',
    `SoundCloud=type=http-response,pattern=https://api-mobile.soundcloud.com/configuration/ios,requires-body=1,script=${scriptCode}`
];

fs.writeFileSync(outputFile, data.join("\n"), "utf-8");
