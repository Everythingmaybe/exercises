const inputStr = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';

console.clear();
console.log(rle(inputStr) === 'A4B3C2XYZD4E3F3A6B28');

function rle(str) {
    return str.replace(/(\w)\1+/g, (match) => match[0] + match.length);
}

