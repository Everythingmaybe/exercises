const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

rl.on('line', (line) => {
    const result = generateParens(line);
    process.stdout.write(result.join('\n'));
});

function addBracket(list, leftRem, rightRem, str, index) {
    if (leftRem < 0 || rightRem < leftRem) return;

    if (leftRem === 0 && rightRem === 0) {
        list.push(str);
    } else {
        str = str.substring(0, index) + '(' + str.substring(index + 1);
        addBracket(list, leftRem - 1, rightRem, str, index + 1);

        str = str.substring(0, index) + ')' + str.substring(index + 1);
        addBracket(list, leftRem, rightRem - 1, str, index + 1);
    }
}

function generateParens(count) {
    const str = ''.repeat(count * 2);
    const list = [];
    addBracket(list, count, count, str, 0);
    return list;
}
