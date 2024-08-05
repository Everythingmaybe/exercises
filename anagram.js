console.clear();

// Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга (регистр букв не имеет значения).
// Важны только символы, пробелы или знаки препинания не учитываются. Пример:
//
// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false

function anagram(first, second) {
    const transform = (str) => str.toLowerCase().split('').sort().join();
    return transform(first) === transform(second);
}

console.log(anagram('finder', 'Friend'));  // --> true
console.log(anagram('hello', 'bye')); // --> false
