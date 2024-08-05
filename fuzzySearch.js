function fuzzySearch(word, str) {
    let j = 0;

    for(let c of word) {
        if (c === str[j]) {
            j++;
        }
    }

    return j === str.length;
}

const word = 'крокодил';

console.log(fuzzySearch(word, 'кроко')) // true
console.log(fuzzySearch(word, 'кдил')) // true
console.log(fuzzySearch(word, 'ид')) // false
