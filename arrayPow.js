function solve(arr) {
    const result = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (Math.abs(arr[left]) > Math.abs(arr[right])) {
            result.unshift(arr[left] ** 2);
            left++
        } else {
            result.unshift(arr[right] ** 2);
            right--
        }
    }

    return result;
}


console.log(solve([-4, -1, 0, 3, 10]));
