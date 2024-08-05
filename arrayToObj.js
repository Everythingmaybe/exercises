var arr = [
    { name: 'width', value: 10 },
    { name: 'height', value: 20 },
];

const obj = arr.reduce((obj, { name, value }) => ({
    ...obj,
    [name]: value,
}),{});

console.clear();
console.log(obj);
