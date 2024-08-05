function fibonacci(n) {
    if (n === 0) return 0;
    if (n < 3) return 1;
    let prevPrev = 1;
    let prev = 1;

    while(n > 3) {
        const current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
        n--;
    }

    return prev + prevPrev;
}

console.log(fibonacci(8)); //21
