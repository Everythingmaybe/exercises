const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
    lines.push(Number(line));
}).on('close', () => {
    let result = 0;
    let temp = 0;

    for (let num of lines) {
        if (num === 1) {
            temp++;
        } else {
            result = Math.max(result, temp);
            temp = 0;
        }
    }

    result = Math.max(result, temp);

    process.stdout.write(result.toString());
});
