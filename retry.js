let testCount = 0;
function test() {
    return new Promise((resolve, reject) => {
        if (testCount === 6) resolve('Ok')
        setTimeout(() => reject('Hello World Error'), 1000);
    })
}

retry(test, { count: 5, delay: (retryCount) => {
        testCount = retryCount;
        console.log(retryCount)
        return retryCount * 1000
    } })
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err))

function retry(promiseFn, { count, delay }) {
    let retryCount = 0;

    const retryFn = () => promiseFn()
        .catch((e) => {
            if (retryCount >= count) throw Error(e);
            retryCount++;
            return new Promise((resolve) => {
                setTimeout(() => resolve(retryFn()), delay(retryCount))
            })
        })

    return retryFn();
}
