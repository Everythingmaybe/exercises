const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
promiseAll([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
// expected output: Array [3, 42, "foo"]

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const promisesValues = [];
        let count = promises.length;

        if (count === 0) return resolve([]);

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((response) => {
                promisesValues[index] = response;
                count--;

                if (count <= 0) {
                    resolve(promisesValues);
                }
            }).catch(reject)
        })
    })
}
