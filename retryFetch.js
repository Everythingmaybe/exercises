// function retryFetch(url, { retryCount, timeout }) {
//     const abortController = new AbortController();
//
//     setTimeout(() => abortController.abort('Timeout'), timeout);
//
//     const retry = (url, count) => fetch(url, {signal: abortController.signal})
//         .catch((e) => {
//             if (count <= 0) throw Error(e);
//             console.log('retry', count - 1)
//             return retry(url, count - 1);
//         }
//     )
//
//     return retry(url, retryCount)
// }

async function retryFetch(url, { retryCount, timeout }) {
    const abortController = new AbortController();

    setTimeout(() => abortController.abort('Timeout'), timeout);

    let response;

    while(retryCount > -1) {
        response = await fetch(url, {signal: abortController.signal})
            .then(resp => {
                retryCount = -1;
                return resp
            })
            .catch((e) => {
                retryCount--;
                if (retryCount <= 0 || abortController.signal.aborted) {
                    throw Error(e);
                }
            })
    }

    return response;
}

retryFetch('https://jsonplaceholder.typicode.com/todos/1', { retryCount: 3, timeout: 1000 })
    .then(res => res.json())
    .then(json => console.log('response', json))
    .catch((e) => console.log('error', e));
