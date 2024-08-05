console.clear();

const STATES = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected',
}

class MyPromise {
    #value;
    #handlers = [];
    #state;

    constructor(callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(`Promise resolver ${callback} is not function`)
        }

        this.#state = STATES.pending;

        try {
            callback(this.#resolve.bind(this), this.#reject.bind(this));
        } catch (e) {
            this.#reject(e)
        }
    }

    #resolve(value) {
        if (this.#state === STATES.pending) {
            this.#state = STATES.fulfilled;
            this.#value = value;
            this.#handle();
        }
    }

    #reject(error) {
        if (this.#state === STATES.pending) {
            this.#state = STATES.rejected;
            this.#value = error;
            this.#handle();
        }
    }

    #handle() {
        this.#handlers.forEach((handler) => {
            const callback = this.#state === STATES.fulfilled ? handler.onResolved : handler.onRejected;

            if (callback === null) {
                this.#state === STATES.fulfilled
                    ? this.#resolve.call(handler.promise, this.#value)
                    : this.#reject.call(handler.promise, this.#value);
                return;
            }

            let value;
            try {
                value = callback(this.#value);
            } catch (e) {
                this.#reject.call(handler.promise, e);
            }
            this.#resolve.call(handler.promise, value);
        })
    }

    then(onResolved, onRejected) {
        const promise = new this.constructor(() => {});

        this.#handlers.push({
            onResolved: typeof onResolved === 'function' ? onResolved : null,
            onRejected: typeof onRejected === 'function' ? onRejected : null,
            promise,
        })

        return promise;
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }
}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Ok')
    }, 1000)
})

const promise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('123')
    }, 100)
})

promise
    .then((res) => res)
    .then((res) => 2)
    .catch((err) => 'e')
    .then((res) => 1)
    .then(() => promise2)
    .catch((err) => 'b')
    .then((res) => console.log(res))
