const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
    'Locket': ['Gold']
};
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'], obj = JSON.parse($response.body)
obj.Attention = "Chúc mừng bạn!";
const locketsub = {
    is_sandbox: !1,
    ownership_type: 'PURCHASED',
    billing_issues_detected_at: null,
    period_type: 'normal',
    expires_date: '2099-12-18T01:04:17Z',
    grace_period_expires_date: null,
    unsubscribe_detected_at: null,
    original_purchase_date: '2024-07-28T01:04:18Z',
    purchase_date: '2024-07-28T01:04:17Z',
    store: 'app_store'
}, locket_expires = {
    grace_period_expires_date: null,
    purchase_date: '2024-07-28T01:04:17Z',
    product_identifier: 'com.ohoang7.premium.yearly',
    expires_date: '2099-12-18T01:04:17Z'
}
const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
    let [e, s] = mapping[match];
    s ? (locket_expires.product_identifier = s , obj.subscriber.subscriptions[s] = locketsub) : obj.subscriber.subscriptions["com.ohoang7.premium.yearly"] = locketsub, obj.subscriber.entitlements[e] = locket_expires
} else obj.subscriber.subscriptions["com.ohoang7.premium.yearly"] = locketsub, obj.subscriber.entitlements.pro = locket_expires;

if (!$persistentStore.read('locket-gold')) {
    $notification.post('Locket', 'You have activated', 'Locket Gold')
    $persistentStore.write(true, 'locket-gold')
}
$done({body: JSON.stringify(obj)});
