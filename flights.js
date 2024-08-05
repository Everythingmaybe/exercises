const graph = {
    A: ['B', 'D'],
    B: ['C', 'N', 'Z'],
    D: ['E', 'F'],
    F: ['S'],
};

findPath('A', 'N', fetchFlight)
    .then((r) => console.log(1, r)); // [A, B, N]
findPath('A', 'S', fetchFlight)
    .then((r) => console.log(2, r)); // [A, D, F, S]
findPath('B', 'S', fetchFlight)
    .then((r) => console.log(3, r))
    .catch((e) => console.log(3, e)); // No way

function fetchFlight(from) {
    return new Promise((resolve, reject) => {
        graph[from] ? resolve(graph[from]) : reject('No way');
    })
}

// Recursion
// function findPath(from, to, fetchFlight) {
//     if (from === to) return Promise.resolve([to]);
//     return fetchFlight(from)
//         .then((flights) => Promise.any(
//             flights.map((f) => findPath(f, to, fetchFlight)
//                 .then((paths) => {
//                     paths.unshift(from);
//                     return paths;
//                 })
//             )
//         ).catch(errors => new Error(errors.errors[0])))
// }

//Stack
async function findPath(from, to, fetchFlight) {
    const queue = [from];
    const routes = new Map();

    while (queue.length) {
        const cur = queue.pop();

        if (cur === to) {
            let curRoute = routes.get(cur)

            if (!curRoute) return [cur];

            const result = [cur, curRoute];

            while (curRoute !== from) {
                curRoute = routes.get(curRoute)
                result.push(curRoute);
            }

            return result.reverse();
        }

        const flights = await fetchFlight(cur).catch(() => []);

        flights.forEach((f) => {
            queue.push(f);
            routes.set(f, cur)
        })
    }

    return Error('No way')
}
