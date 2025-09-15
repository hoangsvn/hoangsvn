import fs from 'fs';
import https from 'https';

function fetchDomainsFromUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data.split('\n').map(line => line.trim())));
        }).on('error', reject);
    });
}

function formatVersion(date) {
    // VD: 2509101608 = YYMMDDHHmm (năm 2025 → 25)
    const yy = String(date.getFullYear()).slice(-2);
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const HH = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${yy}${MM}${dd}${HH}${mm}`;
}

async function processDomains(filePath, url) {
    const localLines = fs.readFileSync(filePath, 'utf-8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'));

    const urlLines = await fetchDomainsFromUrl(url);

    const lines = [...new Set([...localLines, ...urlLines]
        .filter(line => line && !line.startsWith('#')))]
        .sort();

    const now = new Date();
    const version = formatVersion(now);
    const lastModified = now.toLocaleString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false }) + ' UTC+7';

    const outputLines = [
        '#!url=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/module/adblockvn.module',
        '#!name=AD-Block Vn',
        '#!desc=build:' + now.toLocaleString(),
        '',
        '# Title: AD-Block Vn',
        `# Last modified: ${lastModified}`,
        `# Version: ${version}`,
        `# Blocked: ${lines.length.toLocaleString('en-US')} domains`,
        '# Only include advertisers in Vietnam',
        '',
        '[Rule]'
    ];

    let lastInitial = null;
    for (const line of lines) {
        const initial = line[0].toUpperCase();
        if (initial !== lastInitial) {
            outputLines.push('# ' + initial);
            lastInitial = initial;
        }
        outputLines.push('DOMAIN-SUFFIX,' + line + ',REJECT');
    }

    return outputLines.join('\n');
}

const inputFile = 'hostblock.txt';
const url = 'https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/domain-VN.txt';
const outputFile = '../module/adblockvn.module';

processDomains(inputFile, url).then(outputText => {
    fs.writeFileSync(outputFile, outputText, 'utf-8');
    console.log('Xử lý hoàn tất! Kiểm tra file ' + outputFile + '.');
}).catch(err => console.error('Lỗi: ' + err.message));
