const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const citiesCount = lines.shift();
    const cities = lines.splice(0, citiesCount).map((city) => city.split(' '));
    const power = Number(lines[0]);
    const [ start, end ] = lines[1].split(' ');

    let result = 0;
    let prevCity = cities[start - 1];
    for(let i = 1; i <= citiesCount; i++) {
        let j = 0;
    }

    process.stdout.write(result.toString());
});
