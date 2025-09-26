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
    const yy = String(date.getFullYear()).slice(-2);
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const HH = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${yy}${MM}${dd}${HH}${mm}`;
}

function getRootDomain(host) {
    const parts = host.split('.');
    return parts.slice(-2).join('.');
}

async function processDomains(filePath, url) {
    const localLines = fs.readFileSync(filePath, 'utf-8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'));

    const urlLines = await fetchDomainsFromUrl(url);

    const allLines = [...new Set([...localLines, ...urlLines]
        .filter(line => line && !line.startsWith('#')))];

    // Gom nhóm theo root domain
    const groups = {};
    for (const host of allLines) {
        const root = getRootDomain(host);
        if (!groups[root]) groups[root] = [];
        groups[root].push(host);
    }

    // Sắp xếp domain gốc và subdomain
    const sortedRoots = Object.keys(groups).sort();
    for (const root of sortedRoots) {
        groups[root].sort();
    }

    const now = new Date();
    const version = formatVersion(now);
    const name = "ADS Host Block";

    const lastModified = now.toLocaleString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false }) + ' UTC+7';

    // Tạo nội dung module
    const outputLines = [
        `#!name=${name}`,
        '#!desc=build:' + now.toLocaleString(),
        '#!url=https://raw.githubusercontent.com/hoangsvn/hoangsvn/main/module/adblockvn.module',
        '',
        '#Author: Hoangsvn',
        '#Email: i36nxhvn@icloud.com',
        `#Title: ${name}`,
        `#Last modified: ${lastModified}`,
        `#Blocked: ${allLines.length.toLocaleString('en-US')} host`,
        `#Version: ${version}`,
        '',
        '[Rule]'
    ];

    for (const root of sortedRoots) {
        outputLines.push(`# [${root}]`);
        for (const host of groups[root]) {
            outputLines.push(`DOMAIN-SUFFIX,${host},REJECT`);
        }
    }


    const flatList = [];
    for (const root of sortedRoots) {
        flatList.push(`# [${root}]`);
        flatList.push(...groups[root]);
    }

    return {
        outputLines ,
        flatList
    };
}

const inputFile = 'hostblock.txt';
const url = 'https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/domain-VN.txt';
const outputFile = '../module/adblockvn.module';

processDomains(inputFile, url).then(({ outputLines, flatList }) => {
    fs.writeFileSync(outputFile, outputLines.join('\n'), 'utf-8');
    fs.writeFileSync(inputFile, flatList.join('\n'), 'utf-8');

    console.log('Xử lý hoàn tất!');
    console.log('Đã tạo:', outputFile, 'và cập nhật ',inputFile);
}).catch(err => console.error('Lỗi: ' + err.message));
