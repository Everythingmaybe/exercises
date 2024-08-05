function longestSubstringWithoutRepeating(str) {
    const set = new Set();
    let left = 0;
    let right = 0;
    let result = '';

    while (right < str.length) {
        const r = str[right];
        if (!set.has(r)) {
            set.add(r);
            right++;
        } else {
            if (result.length < set.size) result = [...set].join('')
            set.delete(str[left]);
            left++;
        }
    }

    return result;
}

console.log(longestSubstringWithoutRepeating('10233211'));
