const str =
    'year,company,model,edition,price\n' +
    '1997,Ford,E350,"ac abs moon",3000.00\n' +
    '1999,Chevy,"Venture ""Extended Edition""", ,4900.00\n' +
    '  ';

function csv(str) {
    const lines = str.split('\n');
    const keys = lines[0].split(',');

    const result = [];

    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '') continue;

        const values = lines[i].split(',');
        const object = {};

        for (let i in keys) {
            object[keys[i]] = values[i].trim();
        }
        result.push(object);
    }

    return result;
}

console.log(csv(str));
