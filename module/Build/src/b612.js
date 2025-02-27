

console.log(JSON.stringify($response.body));
const obj = {
    result: {
        activated: true,
        products: [{
            productId: '10000',
            startDate: 100000000000,  // Có thể là timestamp (năm 1973)
            expireDate: 1000000000000, // Có thể là timestamp (năm 2001)
            managed: false,
            status: 'active'
        }]
    }
}
$done({body: JSON.stringify(obj)});
