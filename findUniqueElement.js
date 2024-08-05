// function findUniqueElement(arr) {
//     const set = new Set();
//
//     for(let e of arr) {
//         set.has(e) ? set.delete(e) : set.add(e);
//     }
//
//     return [...set][0]
// }

function findUniqueElement(arr) {
    let result = 0;

    for(let e of arr) {
        result ^= e
    }

    return result;
}

console.log(findUniqueElement([1,1,3,3,4,2,2,0,33,33,0]));
