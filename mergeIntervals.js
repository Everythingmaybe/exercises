const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]
// [1,4], [2,3]
function merge(intervals) {
    intervals = [...intervals].sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]]

    for(let interval of intervals) {
        const last = result.at(-1);

        if (last[1] >= interval[0]) {
            last[1] = Math.max(last[1], interval[1])
        } else {
            result.push(interval)
        }
    }

    return result;
}

// function merge(intervals) {
//     intervals = [...intervals].sort((a, b) => a[0] - b[0]);
//
//     let i = intervals.length - 1;
//
//     while (i) {
//         if (intervals[i][0] <= intervals[i - 1][1]) {
//             intervals[i - 1] = [intervals[i - 1][0], Math.max(intervals[i][1], intervals[i - 1][1])];
//             intervals.splice(i, 1);
//         }
//         i--;
//     }
//
//     return intervals;
// }

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));
