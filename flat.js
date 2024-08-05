function flat(array) {
    const result = [];
    let stack = [...array];

    while(stack.length) {
        const item = stack.shift();
        Array.isArray(item)
            ? stack.unshift(...item)
            : result.push(item);
    }

    return result;
}
const array = [12,[1,[2, [3,4,5,6,7]]], 1];
console.log(flat(array), array)
