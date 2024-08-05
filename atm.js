const limits = {
    5000: 5,
    1000: 5,
    500: 5,
    100: 5,
    // 23: 13,
    // 543: 1,
    3: 5
}

function atm(sum, limits) {
    const result = {};
    const sortLimitsKeys = Object.keys(limits).map(Number).sort((a, b) => b - a)

    for(let l of sortLimitsKeys) {
        const count = Math.min(limits[l], Math.floor(sum / l));
        if (count) {
            result[l] = count;
            sum -= l * count;
        }
    }

    if (sum !== 0) {
        console.log('Не смог')
        return;
    }

    for(let l in result) {
        limits[l] -= result[l];
    }

    return result;
}

console.log(atm(15600, limits));
console.log(limits)
