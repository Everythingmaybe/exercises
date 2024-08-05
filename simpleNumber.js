const simpleNumber = (number) => {
    const m = Math.floor(number / 2);
    for(let i = 2; i <= m; i++) {
        if (number % i === 0) return false;
    }

    return true;
}

console.log(simpleNumber(11));
