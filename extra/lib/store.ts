// Hàm OneNotification
function OneFunc(key: string, func: () => void): void {
    if ($persistentStore.read(key) !== 'true') {
        func();
        $persistentStore.write('true', key);
    }
}

// Hàm Removekey
function RemoveKey(key: string): void {
    $persistentStore.write('', key); // Giả định API hỗ trợ xóa key bằng cách ghi null
}

export default {
    OneFunc,
    RemoveKey
};