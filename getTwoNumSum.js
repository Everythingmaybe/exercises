function getTwoNumSum(arr, k) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        const num = arr[l] + arr[r];
        if (num === k) {
            return [arr[l], arr[r]];
        }

        (num > k) ? r-- : l++;
    }

    return [];
}

console.log(getTwoNumSum([1,1,4,5,6,9,12], 7))
console.log(getTwoNumSum([1,1,4,5,6,9,12], 10))
console.log(getTwoNumSum([-1,1,1,4,5,11,12], 10))

// function getTwoNumSum(arr, k) {
//     const set = new Set();
//
//     for (let i = 0; i < arr.length; i++) {
//         const num = k - arr[i];
//
//         if (set.has(num)) {
//             return [num, arr[i]]
//         }
//
//         set.add(arr[i]);
//     }
//
//     return [];
// }
