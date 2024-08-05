function isSimilarArray(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const map = new Map();

    for(let e of arr1) {
        map.set(e, (map.get(e) || 0) + 1)
    }

    for (let e of arr2) {
        if (!map.has(e)) return false

        const count = map.get(e) - 1;
        count < 1 ? map.delete(e) : map.set(e, count);
    }

    return map.size === 0;
}

console.log(isSimilarArray([1, 2, 3,1], [2,1,1,3]))
console.log(isSimilarArray([1, 2], [2,1,3]))
console.log(isSimilarArray([0,5,1], [0,1,5]))
console.log(isSimilarArray([0,8,1], [0,1,5]))
console.log(isSimilarArray([0,5,1], [0,1,5,8]))
