console.clear();

Function.prototype.customBind = function(...args) {
    return (...secondArgs) => this.call(...args, ...secondArgs);
};

function test(...args) {
    console.log(this, ...args);
}

const obj = {
    foo: 'bar',
};

test.bind(obj, 1, 2)(9, 9);
test.customBind(obj, 1, 2)(9, 9);
