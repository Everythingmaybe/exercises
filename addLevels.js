// Объект на вход
const object = {
    a: {
        d: {
            h: 4
        },
        e: 2
    },
    b: 1,
    c: {
        f: {
            g: 3,
            k: {}
        }
    }
};

// const addLevels = (obj) => {
//     const helper = (obj, level = 0) => {
//         if (typeof obj === 'object') {
//             for(let key in obj) {
//                 obj[key] = helper(obj[key], level + 1);
//             }
//             obj.level = level;
//         }
//         return obj;
//     }
//     return helper(obj, 0);
// }

const addLevels = (obj) => {
    const newObject = JSON.parse(JSON.stringify(obj));
    const stack = [{obj: newObject, level: 0}];

    while(stack.length) {
        const {obj, level} = stack.pop();
        obj.level = level;

        for(let key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                stack.push({obj: obj[key], level: level + 1});
            }
        }
    }

    return newObject;
}

console.log(addLevels(object));

// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/

// Object { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } }
