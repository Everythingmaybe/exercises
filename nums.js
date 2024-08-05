function sameNums(...numArrays) {
    let map = new Map();

    for(let n = 0; n < numArrays.length; n++) {
        for(let i = 0; i < numArrays[n].length; i++) {
            const item = numArrays[n][i];
            const itemCount = map.get(item) || 0;
            if (itemCount <= n) {
                map.set(item, itemCount + 1);
            }
        }
    }

    for(let [key, value] of map) {
        if (value === numArrays.length) return key;
    }
    return null;
}

console.log(sameNums([1,2,3,4,5], [3,3,4], [2,4,5,6]))
