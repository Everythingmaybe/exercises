const anagram = (strA, strB) => {
    if (strA.length !== strB.length) return false;

    strA = strA.toLowerCase();
    strB = strB.toLowerCase();

    const map = new Map();

    for(let c of strA) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    for(let c of strB) {
        if (!map.has(c)) return false;
        const count = map.get(c) - 1;
        count < 1 ? map.delete(c) : map.set(c, count);
    }

    return map.size === 0;
}

console.log(anagram('finder', 'Friend')) // true
console.log(anagram('hello', 'bye')) // false
