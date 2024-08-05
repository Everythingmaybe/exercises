console.clear();

const input = [];

function findBiggestNumbersRange(sequence) {
    if (!sequence.length) return [];
    const sortedArray = Array.from(new Set(sequence)).sort((a, b) => a - b);
    let resultArray = [];
    let tempResultArray = [];
    for (let i = 0; i < sortedArray.length; i++) {
        tempResultArray.push(sortedArray[i]);
        if (sortedArray[i] + 1 !== sortedArray[i + 1]) {
            resultArray = resultArray.length < tempResultArray.length
                ? tempResultArray
                : resultArray;
            tempResultArray = [];
        }
    }

    return [resultArray[0], resultArray[resultArray.length - 1]];
}

console.log(findBiggestNumbersRange(input));

// 1. Треннинг
// 2. Знакомство с проектом
// 3. Положительный фидбек от заказчика
