function debounce(fn, ms) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, ms);
    }
}

const debounceFn = debounce((a) => console.log('call', a), 1000);
debounceFn('1')
debounceFn('2')
debounceFn('3')
