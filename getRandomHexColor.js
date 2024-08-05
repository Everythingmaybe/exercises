console.clear();
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());

function getRandomHexColor() {
    return '#' + Math.round( Math.random() * parseInt('ffffff', 16)).toString(16).padStart(6, '0')

    // String + RegExp
    // return '#' + '000000'.replace(/./g, () => random16Base());
}

function random16Base() {
    return Math.round(Math.random() * 15).toString(16);
}
