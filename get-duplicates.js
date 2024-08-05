const arr = [
    [1,1,2,3,4],
    [1,1,2],
    [1, 1, 2, 3,4],
    [1,2, 4],
]

function getDuplicates(arr) {
    const map = new Map();

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            const num = arr[i][j];
            const count = map.get(num) || 0;

            if (count === i) {
                map.set(num, count + 1);
            }
        }
    }

    return Array.from(map)
        .filter(([key, count]) => count === arr.length)
        .map(([key]) => key);
}

console.log(getDuplicates(arr));
