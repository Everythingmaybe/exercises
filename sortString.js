function sortString(str) {
    const map = new Map();

    for(let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    return [...map]
        .sort((a, b) => b[1] - a[1])
        .map(([char]) => char)
        .join('');
}

console.log(sortString('zxczxczxcccx'))
