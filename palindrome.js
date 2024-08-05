function palindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    const middle = Math.ceil(str.length / 2);

    for(let i = 0; i < middle; i++) {
        if (lowerCaseStr[i] !== lowerCaseStr[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.clear();
console.log(palindrome('racecar'));
console.log(palindrome('raccar'));
console.log(palindrome('😀raccar'));
console.log(palindrome('12321'));
