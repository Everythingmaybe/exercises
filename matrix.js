// есть матрица m x n, её нужно заполнить рандомными числами от 0 до 1000, которые не повторяются.
// (у тебя уже есть функция rand() - которая генерит числа от 0 до 1000).
// Пусть m = 10, n = 20

// // First example with randUnique function
// function randUnique(max, min = 0) {
//     let numbers = Array(max - min + 1)
//         .fill(undefined)
//         .map(() => min++);
//     return function () {
//         const randomIndex = Math.round(Math.random() * numbers.length);
//         return numbers.splice(randomIndex, 1);
//     }
// }
//
// const rand = randUnique(1000);
//
// const matrix = Array(10)
//     .fill(undefined)
//     .map(() => Array(20)
//         .fill(undefined)
//         .map(() => rand()));

function rand(max = 1000, min = 0) {
    return Math.round(Math.random() * (max - min) + min);
}

// Second example with existed rand function and search unique number in map()
const existedNumbers = [];
const matrix = Array(10)
    .fill(undefined)
    .map(() => Array(20)
        .fill(undefined)
        .map(() => {
            let randomNumber = rand();
            while (existedNumbers.includes(randomNumber)) {
                randomNumber = rand();
            }
            existedNumbers.push(randomNumber);
            return randomNumber;
        }));
