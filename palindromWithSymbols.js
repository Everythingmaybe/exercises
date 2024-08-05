const palindrome = (str) => {
    let l = 0;
    let r = str.length - 1;

    while(l < r) {
        const left = str[l].toLowerCase();
        const right = str[r].toLowerCase();

        if (left.toUpperCase() === left) {
            l++;
            continue;
        }

        if (right.toUpperCase() === right) {
            r--;
            continue;
        }

        if (left !== right) return false;
        l++;
        r--;
    }

    return true;
}

console.log(palindrome('Казак')); // true
console.log(palindrome('Madam, I\'m Adam')); // true
console.log(palindrome('А в Енисее - синева')); // true
console.log(palindrome('О, духи, от уборки микробу-то и худо')); // true
console.log(palindrome('Не палиндром '));// false
