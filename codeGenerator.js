// function createCodeGenerator(min, max) {
//     const existedCodes = new Set();
//     const codeLength = max.toString().length;
//     const codesMaxCount = max - min + 1;
//
//     return () => {
//         if (existedCodes.size >= codesMaxCount) return null;
//         let code;
//
//         while (existedCodes.has(code) || code === undefined) {
//             code = Math.floor(Math.random() * (max - min + 1) + min);
//         }
//         existedCodes.add(code);
//
//         return code.toString().padStart(codeLength, '0');
//     }
// }

function createCodeGenerator(min, max) {
    const codesLength = max - min + 1;
    const codeStringLength = max.toString().length;
    const codes = Array.from({length: codesLength}, (e, i) => String(i + min).padStart(codeStringLength, '0'));

    for(let i in codes) {
        const newIndex = Math.floor(Math.random() * codesLength);
        [codes[i], codes[newIndex]] = [codes[newIndex], codes[i]]
    }

    let currentIndex = 0;

    return () => {
        if (currentIndex >= codesLength) return null;
        return codes[currentIndex++];
    }
}

const codeGenerator = createCodeGenerator(1, 9);

let i = 10;

while(i--) {
    console.log(codeGenerator());
}
