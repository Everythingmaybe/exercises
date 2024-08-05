const myPromiseRace = (promises) => new Promise((resolve) => {
    promises.forEach(p => {
        p.then((r) => resolve(r))
    })
})

const testPromise = (ms) => new Promise((res) => {
    setTimeout(() => res(ms), ms)
})

myPromiseRace([
    testPromise(3000),
    testPromise(1000),
    testPromise(300),
    testPromise(5000)
]).then((res) => console.log(res))
