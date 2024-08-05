function reduceStringRegexp(str) {
    return str.replace(/(.)\1+/g, '$1' + ('$1'.length + 1))
}

function reduceString(str) {
    let result = '';
    let count = 0;

    for(let c of str) {
        const lastChar = result.at(-1);
        if (c !== lastChar) {
            if (count > 1) result += count;

            result += c;
            count = 1;
        } else {
            count++;
        }
    }

    return result;
}


console.log(reduceStringRegexp('AAABCCDDDDDFFR'));
console.log(reduceString('AAABCCDDDDDFFR'));
