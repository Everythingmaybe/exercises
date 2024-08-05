const first = [8,4,3,2,34,5,3,2,6,6,6];
const second = [10,2,34,5,6,23,3,2,6,3,22,22,234455,6];

function intersection (a, b) {
    const result = [];
    const map = new Map();

    for(let i in a) {
        if (!map.has(a[i])) {
            map.set(a[i], i)
        }
    }

    let i;
    for(let n of b) {
        if (i !== undefined) {
            if (a[i] === n) {
                result.push(n)
                i++;
            } else {
                break;
            }
        } else if (map.has(n)) {
            i = map.get(n);
            result.push(n);
            i++;
        }
    }

    return result;
}

console.log(intersection(first, second)) // -> [3, 4]
