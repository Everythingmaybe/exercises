function flattenArray(arr) {
    const result = [];
    let stack = [...arr];

    while(stack.length) {
        const item = stack.pop();
        Array.isArray(item) ? stack.push(...item) : result.unshift(item);
    }

    return result;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]
