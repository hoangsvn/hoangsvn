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

async function processDomains(filePath, url) {
    const outputLines = [
        '#!url=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/module/adblockvn.module',
        '#!name=AD-Block Host',
        '#!desc=build:' + new Date().toLocaleString(),
        '',
        '[Rule]'
    ];

    // Đọc domains từ file local
    const localLines = fs.readFileSync(filePath, 'utf-8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'));

    // Đọc domains từ URL
    const urlLines = await fetchDomainsFromUrl(url);

    // Kết hợp và loại bỏ trùng lặp
    const lines = [...new Set([...localLines, ...urlLines]
        .filter(line => line && !line.startsWith('#')))]
        .sort();

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
