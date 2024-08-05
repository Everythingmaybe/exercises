const hasPairWithSum = (arr, sum) => {
    const set = new Set();

    for(let n of arr) {
        if (set.has(n)) return true;
        set.add(sum - n);
    }

    return false;
}

console.log(hasPairWithSum([3, 4, 7, 10], 8)) // false
console.log(hasPairWithSum([1, 4, 4, 9], 8)) // true
console.log(hasPairWithSum([-8, 1, 4, 9, 16], 8)) // true
