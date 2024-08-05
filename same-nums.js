// function getSameNum(a, b, c) {
//     let i = 0, j = 0, k = 0;
//
//     while (i < a.length && j < b.length && k < c.length) {
//         const max = Math.max(a[i], b[j], c[k]);
//
//         let same = true;
//         while (i < a.length && a[i] < max) {
//             i++;
//             same = false;
//         }
//         while (j < b.length && b[j] < max) {
//             j++;
//             same = false;
//         }
//         while (k < c.length && c[k] < max) {
//             k++;
//             same = false;
//         }
//
//         if (same)
//             return a[i];
//     }
//     return null;
// }

function getSameNum(a, b, c) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < a.length && j < b.length && k < c.length) {
        let same = true;
        while (a[i] < b[j] || a[i] < c[k]) {
            i++;
            same = false
        }
        while (b[j] < a[i] || b[j] < c[k]) {
            j++;
            same = false
        }
        while (c[k] < a[i] || c[k] < b[j]) {
            k++;
            same = false
        }
        if (same) return a[i];
    }

    return -1;
}

console.log(getSameNum([1,2,3,4,5], [3,3,4], [2,3,4,5,6]))
