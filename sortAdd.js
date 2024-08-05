console.clear();
const ar = [2, 3, 7, 4, 6, 1, 5, 8, 9];
const expectedArr = [2, 1, 3, 4, 6, 5, 7, 8, 9];

sortAdd(ar);

console.log(equalArr(ar, expectedArr));

function sortAdd(arr) {
    const sortedOddArray = arr
        .filter((x) => x % 2)
        .sort();
    let i = 0;
    arr.forEach((x, k) => {
        if (x % 2) {
            arr[k] = sortedOddArray[i++];
        }
    });
}

function equalArr(first, second) {
    return first.every((x, i) => x === second[i]);
}
