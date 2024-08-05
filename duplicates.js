const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    lines.shift();
    const result = Array.from(new Set(lines));
    process.stdout.write(result.join('\n'));
});
