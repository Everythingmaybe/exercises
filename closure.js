// console.clear();
// const arrFunc = []
//
// for (var i = 0; i < 5; i++) {
//     arrFunc.push(function() {
//         return i
//     })
// }
//
// for (let i = 0; i < arrFunc.length; i++) {
//     console.log(arrFunc[i]()) // все 5
// }

// Замыкание - это способность функции запоминать (лексическое окружение)/(переменные,параметры,функции) где она была объявлена(создана)
let a = 'a';
function test() { console.log(a) }

function closure(param) {
    const b = 'b'
    return function (param2) {
        console.log(param, param2, a, b);
        test();
    }
}

const f1 = closure(1);
f1(2)

