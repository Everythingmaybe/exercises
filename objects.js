// var b = {};
// var c;
//
// b.b = 1;
// c = b;
// c.b = 2;
// console.clear();
// console.log('1)', b.b); // 2
// console.log('2)', c.b); // 2

// var b = 1;
// var c;
//
// c = b;
// c = 2;
//
// console.clear();
// console.log('1)', b); // 1
// console.log('2)', c); // 2

// function f() {
//     console.log(this.x);
// }
// var obj = {x: 'yandex'};
// f.call(obj);

function F() {}
F.prototype.x = 1;
const f = new F();
console.log(f.x);
F.prototype.x = 2;
console.log(f.x);
delete f.x;
console.log(f.x);
