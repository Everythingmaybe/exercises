console.clear();

const add = (a) => {
    let sum = a;
    const func = (b) => {
        if (b) {
            sum += b;
            return func;
        } else {
            return sum;
        }
    };
    return func;
};

const addAdvanced = (...args) => {
    let sum = args.reduce((sum, number) => sum + number, 0);
    const func = (...arguments) => {
        let s = arguments.reduce((sum, number) => sum + number, 0);
        sum += s;
        return func;
    };
    func.toString = () => sum;
    return func;
};

// console.log(add(2)(3)()) // 5
console.log(String(addAdvanced(2,2)(3,4)(12))) // 23
