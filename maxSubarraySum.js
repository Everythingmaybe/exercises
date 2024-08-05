function maxSubarraySum(arr) {
    let localMax = arr[0];
    let resultMax = arr[0];

    for(let n of arr) {
        localMax = Math.max(localMax + n, n);
        resultMax = Math.max(resultMax, localMax)
    }

    return resultMax;
}

console.log(maxSubarraySum([1,-4,2,3,-40,2,-7,0,0,0,1]));
