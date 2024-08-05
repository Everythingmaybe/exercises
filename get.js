const obj = {
    a: {
        b: 123,
        c: undefined,
    }
};

// function get(obj, path, returnValue) {
//     return path.split('.').reduce((obj, field) => {
//         return obj && obj[field];
//     }, obj) || returnValue;
// }

function get(obj, path, returnValue) {
    const keys = path.split('.');
    let result = obj;
    for (let key of keys) {
        if (result.hasOwnProperty(key)) {
            result = result[key];
        } else {
            return returnValue;
        }
    }
    return result;
}

console.log(get(obj, 'a.c', 'some value'));
