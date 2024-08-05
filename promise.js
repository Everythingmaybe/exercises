function getAuth() { return promise('auth', true) } // return Promise (critical) with token

function getUser(token) { return promise('user', token) } // [return Promise with userId]
function getOrder(token, userId) { return promise('order', Boolean(token && userId)) } // [return Promise]
function getPromo(token) { return promise('promo', Boolean(token)) } // [return Promise]

function getData() {
    return getAuth()
        .then((token) => Promise.all([
            getUser(token).then((userId) => getOrder(token, userId)).catch(() => undefined),
            getPromo(token).catch(() => undefined)
        ]).then(([order, promo]) => ({ auth: token, order, promo })))
    // return Promise with {auth, order, promo} data
}

function promise(name, resolved = true) {
    return (new Promise(((resolve, reject) => { resolved ? resolve(name) : reject('err: ' + name) })));
}

getData().then((res) => { console.log(res) });

