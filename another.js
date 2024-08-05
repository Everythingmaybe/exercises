// function Book(name, author) {
//     this.name = name;
//     this.author = author;
//     return this;
// }
//
// const foo = Foo(Book, 'Учебник javascript', 'Петр Сергеев');
//
// console.clear();
// console.log(foo.name);
// function Foo(Class, ...args) {
//     return new Class(...args);
// }
console.clear();

function test(error) {
    try {
        if (error) {
            throw new Error('error');
        }
        return 'try';
    } catch (e) {
        return e.message;
    } finally {
        return 'finally'
    }
}

console.log(test());
