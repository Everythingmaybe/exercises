// Для чтения входных данных в Node.js необходимо использовать
// модуль readline, который работает с потоком ввода-вывода
// (stdin/stdout) и позволяет читать строки.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Данные во входном потоке могут состоять из нескольких строк.
// Чтобы прочитать их, можно использовать метод rl.on(),
// который вызывается каждый раз при появлении новой строки
// в потоке ввода.
// Чтобы вывести результат в поток вывода (stdout),
// можно использовать метод console.log().
// Пример:
// console.log('Результат:', result);

// Пример решения задачи "Вычислите сумму A+B":
const input = [];

rl.on('line', line => {
    input.push(line.split(' ').map(Number));
});

rl.on('close', () => {
    console.log(getMinLength(input[0][0], input[1].sort((a,b) => a - b)));
});

function getMinLength(count, coordinates) {
    if (count === 1) return coordinates[1] - coordinates[0];
    if (count === 2) return coordinates[2] - coordinates[0];
    console.log(count)
    return Math.min(getMinLength(count - 2, coordinates), getMinLength(count - 1, coordinates)) + coordinates[count] - coordinates[count - 1];
}
