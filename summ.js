// console.clear();
// const fs = require('fs');
//
// fs.readFile('input.txt', (err, data) => {
//     if (!err) {
//         const [a, b] = String(data).split(' ').map(Number);
//         const result = a + b;
//         fs.writeFile('output.txt', result.toString(), () => {});
//     }
// });
// //
// // let lines = [];
// // rl.on('line', (line) => {
// //     lines.push(line);
// // }).on('close', () => {
// //     if (lines[0]) {
// //         const [a, b] = lines[0].split(' ').map(Number);
// //         const result = a + b;
// //         process.stdout.write(result.toString());
// //     }
// // });

class CoffeeMachine {
    // ...

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W

coffeeMachine._power = 25; // Error (no setter)
console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W

coffeeMachine.power = 251; // Error (no setter)
console.log(`Мощность: ${coffeeMachine.power}W`); // Мощность: 100W
