const obj = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: 4
};

const flattenObject = (obj) => {
    let result = {}

    let stack = [{obj: obj, path: ''}];

    while (stack.length) {
        let { obj, path } = stack.pop();

        if (typeof obj !== 'object' && obj !== null) {
            result[path] = obj;
            continue;
        }

        path &&= path + '.';

        for(let key in obj) {
            stack.push({obj: obj[key], path: `${path}${key}`});
        }
    }

    return result;
}

const flattenedObj = flattenObject(obj);
console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }
