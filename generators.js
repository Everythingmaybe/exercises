function* getNumbers() {
    yield 1;
    yield 2;
    let number = yield 'Set some number';
    yield number;
    let anotherNumber = yield 'Set some number';
    return anotherNumber;
}

const get = getNumbers();

// console.log(get.next());
// console.log(get.next());
// console.log(get.next());
// console.log(get.next(5));
// console.log(get.next());
// console.log(get.next(10));

function* pseudoRandom(seed) {
    let previous = seed;
    while (true) {
        previous = previous * 16807 % 2147483647;
        yield previous;
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
