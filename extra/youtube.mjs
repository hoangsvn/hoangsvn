import * as esbuild from 'esbuild'
import fs from 'fs';

const outputFile = '../module/youtube.module';

// Build youtube.js trước
esbuild.buildSync({
    entryPoints: {
        youtube: './src/youtube.js'
    },
    bundle: true,
    minify: true,
    sourcemap: false,
    outdir: './dist'
});

// Đọc nội dung sau build
const scriptCode = fs.readFileSync('./dist/youtube.js', 'utf-8');

const data = [
    '#!url=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/module/youtube.module',
    '#!name =YouTube',
    '#!desc =No ADS build:'+ new Date().toLocaleString(),
    '',
    '[Rule]',
    'AND,((DOMAIN-SUFFIX,googlevideo.com), (PROTOCOL,UDP)),REJECT',
    'AND,((DOMAIN,youtubei.googleapis.com), (PROTOCOL,UDP)),REJECT',
    '',
    '[URL Rewrite]',
    '(^https?:\\/\\/[\\w-]+\\.googlevideo\\.com\\/(?!dclk_video_ads).+?)&ctier=L(&.+?),ctier,(.+) $1$2$3 302',
    '^https?:\\/\\/[\\w-]+\\.googlevideo\\.com\\/(?!(dclk_video_ads|videoplayback\\?)).+&oad _ reject-200',
    '^https?:\\/\\/(www|s)\\.youtube\\.com\\/api\\/stats\\/ads _ reject-200',
    '^https?:\\/\\/(www|s)\\.youtube\\.com\\/(pagead|ptracking) _ reject-200',
    '^https?:\\/\\/s\\.youtube\\.com\\/api\\/stats\\/qoe\\?adcontext _ reject-200',
    '',
    '[MITM]',
    'hostname = %APPEND% -redirector*.googlevideo.com,*.googlevideo.com,www.youtube.com,s.youtube.com,youtubei.googleapis.com',
    '',
    '[Script]',
    '',
    `Youtube=type=http-response,pattern=^https:\\/\\/youtubei\\.googleapis\\.com\\/youtubei\\/v1\\/(browse|next|player|search|reel\\/reel_watch_sequence|guide|account\\/get_setting|get_watch),requires-body=1,max-size=-1,binary-body-mode=1,script=${scriptCode},argument="{}"`,
]

fs.writeFileSync(outputFile, data.join("\n"), "utf-8")
