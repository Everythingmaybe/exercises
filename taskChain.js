const taskChain = (task1, task2, task3) => {
    console.log(task1, task2, task3);
}

const curriedTaskChain = curry(taskChain);

function curry(fn) {
    return function helper(...args) {
        return args.length >= fn.length
            ? fn(...args)
            : helper.bind(this, ...args)
    }
}

// function curry(fn) {
//     return (...p) => {
//         const params = [];
//
//
//         function helper(...args) {
//             params.push(...args);
//
//             if (params.length >= fn.length) return fn(...params);
//
//             return helper;
//         }
//
//         return helper(...p);
//     }
// }

console.log(curriedTaskChain()()(1,2,3));
console.log(curriedTaskChain()(1)()(2)(3));
console.log(curriedTaskChain(1,2,3));
console.log(curriedTaskChain(1)()(2,3));
