function add(n) {
    let sum = 0;

    function helper(a) {
        if (a === undefined) return sum;
        sum += a;

        return helper;
    }

    return helper(n)
}

console.log(add(9)(10)()) // 19
console.log(add(9)()) // 9
console.log(add()) // 0
