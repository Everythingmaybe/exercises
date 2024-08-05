function flat(array) {
    const result = [];
    const stack = [...array];

    while (stack.length) {
        const item = stack.shift();
        Array.isArray(item)
            ? stack.unshift(...item)
            : result.push(item)
    }

    return result;
}

console.log(flat([1,2,[3,4,[5]], 6, 7]))
console.log(flat([[], 1,[[2]],[3,4,[5]], 6, 7]))
