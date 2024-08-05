function throttle(fn, ms) {
    let canCalled = true;
    let lastContext;
    let lastArgs;

    return function (...args) {
        if (!canCalled) {
            lastContext = this;
            lastArgs = args;
            return
        }

        fn.apply(this, args);
        canCalled = false;
        setTimeout(() => {
            fn.apply(lastContext, lastArgs);
            canCalled = true;
            lastContext = null;
            lastArgs = null;
        }, ms);
    }
}

const throttleFn  = throttle((a) => console.log('call', a), 1000);

throttleFn('1');
throttleFn('2');
setTimeout(() => throttleFn('3'), 1000);
