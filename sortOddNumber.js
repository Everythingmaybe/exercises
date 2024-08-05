const input = [5, 4, 1, 6, 3, 8];
const output = [1, 4, 3, 6, 5, 8];

function sortOddNumber(input) {
    const oddArr = input.filter((n) => n % 2).sort((a, b) => b - a);

    return input.map((n) => {
        if (n % 2) return oddArr.pop();
        return n
    })
}

console.log(sortOddNumber(input));
