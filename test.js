console.clear()

// const promise = new Promise(((resolve) => {
//     resolve('promise 1')
// }));
//
// setTimeout(() => console.log('timeout 3'))
//
// promise.then((next) => console.log(next));
//
// queueMicrotask(test);
//
// function test() {
//     console.log('sync 2');
// }

// var a={},
//     b={key:'b'},
//     c={key:'c'};
//
// a[b]=123; // a.[Object object] = 123
// a[c]=456; // a.[Object object] = 456
//
// console.log(a[b]); // a.[Object object] = 456

function test3(...args) {
    return args.includes(3);
    // return Array.prototype.slice.call(arguments).includes(3);
    // return [...arguments].includes(3);
}

// console.log(test3(1,2,3));

const obj = {type: {id: 1, title: 'One', child: { id: 10 }}};

const { type: {id: typeId = 000, title: typeTitle = 'Title', child: { id: childId = 999 } } } = obj;

// console.log(typeId, typeTitle, childId);

class Test {
    constructor(a, b) {
        this.a = a;
        this.b = a;
    }

    show(){
        console.log(this.a, this.b)
    }
}

const test = new Test(1, 2);
console.log(Test, test);
