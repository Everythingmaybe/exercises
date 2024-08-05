// Нужно написать функцию strjoin, которая склеивает строки через разделитель
strjoin('.', 'a', 'b', 'c') //'a.b.c'
strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f') //'a-b-c-d-e-f'

// function strjoin(separator, ...args) {
//     return args.join(separator);
// }

function strjoin(separator) {
    const symbols = [].slice.call(arguments, 1);
    return symbols.join(separator);
}
