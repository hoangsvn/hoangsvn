const obj = {

    result: {
        activated: true,
        products: [{
            productId: '10000',
            startDate: 100000000000,
            expireDate: 1000000000000,
            managed: false,
            status: 'active'
        }]
    }
}

$done({body: JSON.stringify(obj)});
