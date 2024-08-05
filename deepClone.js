const obj = {
    a: 1,
    b: [1,2,4, {5: 5, 6: [7,8]}, [9, 10]]
}

function deepClone(value) {
    let copy = value;
    if (typeof value === 'object' || Array.isArray(value)) {
        copy = Array.isArray(value) ? [] : {};

        for (let key in value) {
            copy[key] = deepClone(value[key]);
        }
    }
    return copy;
}

const newObj = deepClone(obj);

obj.a = '1-1';
obj.b[3][6][0] = 'zzzzzzzzzzzzzzz';

console.log(JSON.stringify(obj), JSON.stringify(newObj));

let a = 'a';
let b = 'b';

[a,b]= [b, a]

console.log('a:', a, ' b:', b );
