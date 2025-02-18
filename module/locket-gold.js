const mapping = {
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8': 'vip+watch_vip',
    'Locket': 'Gold'
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
    obj = JSON.parse($response.body);

obj.Attention = "Không Chia sẻ";

var sub = {
    is_sandbox: false,
    ownership_type: "PURCHASED",
    expires_date: "2099-12-18T01:04:17Z",
    purchase_date: "2024-07-28T01:04:17Z",
    store: "app_store"
};

var product = {
    purchase_date: "2024-07-28T01:04:17Z",
    product_identifier: "com.ohoang7.premium.yearly",
    expires_date: "2099-12-18T01:04:17Z"
};

const match = Object.keys(mapping).find(e => ua.includes(e));
obj.subscriber.subscriptions[match ? mapping[match] : product.product_identifier] = sub;
obj.subscriber.entitlements[match ? mapping[match] : "pro"] = product;

$done({ body: JSON.stringify(obj) });



