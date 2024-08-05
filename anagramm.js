const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const transform = (str) => str.toLowerCase().split('').sort().join();

    const result = transform(lines[0]) === transform(lines[1]) ? '1' : '0';

    process.stdout.write(result);
});
