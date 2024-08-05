function allSettled(promises) {
    let count = promises.length;
    const result = Array(count);

    return new Promise((resolve) => {
        promises.forEach((promise, i) => Promise.resolve(promise)
            .then((response) => result[i] = { status: 'fulfilled', value: response })
            .catch(err => result[i] = { status: 'rejected', reason: err })
            .finally(() => {
                count--;
                if (count <= 0) resolve(result);
            })
        );
    })
}

allSettled([
    Promise.resolve(1),
    Promise.reject('2'),
    3,
    new Promise(resolve => setTimeout(() => resolve(4), 1000)),
]).then(results => {
    console.log(results)
})
