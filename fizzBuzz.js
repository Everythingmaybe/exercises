// Напишите функцию, которая выводит в консоль числа от 1 до n, где n — целое число, которое функция принимает в качестве параметра, при этом:
//
// выводит fizz вместо чисел, кратных 3;
// выводит buzz вместо чисел, кратных 5;
// выводит fizzbuzz вместо чисел, кратных и 3, и 5.

function fizzBuzz(number) {
    for(let i = 1; i <= number; i++) {
        let result = '';

        if (!(i % 3)) {
            result += 'fizz';
        }

        if (!(i % 5)) {
            result += 'buzz';
        }
        console.log(result || i);
    }
}

console.clear();
fizzBuzz(15);
