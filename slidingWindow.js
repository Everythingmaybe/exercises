const str1 = 'abcbada' // 4
const str2 = 'axbxcxd' // 3
const str3 = 'aaaaaaa' // 1
const str4 = 'abcdefg' // 7

function longestSubstring(str) {
    const set = new Set();
    let l = 0;
    let r = 0;

    let max = 0;

    while (str.length > r) {
        if (set.has(str[r])) {
            set.delete(str[l]);
            l++;
        } else {
            set.add(str[r]);
            max = Math.max(max, set.size);
            r++;
        }
    }

    return max;
}

console.log(longestSubstring(str1))
console.log(longestSubstring(str2))
console.log(longestSubstring(str3))
console.log(longestSubstring(str4))
