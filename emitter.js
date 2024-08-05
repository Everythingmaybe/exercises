class EventEmitter {
    map = new Map()

    subscribe(eventName, callback) {
        const callbacks = this.map.get(eventName) || [];
        callbacks.push(callback);
        this.map.set(eventName, callbacks);

        return {
            release: () => {
                this.map.set(eventName, this.map.get(eventName).filter(c => c !== callback));
            }
        }
    }

    emit(eventName, ...args) {
        this.map.get(eventName).forEach(c => c(...args));
    }
}

const emitter = new EventEmitter();

const sub1 = emitter.subscribe('event1', callback1);
const sub2 = emitter.subscribe('event2', callback2);
const sub3 = emitter.subscribe('event1', callback1);

emitter.emit('event1', 1, 2); // 3 // 3
emitter.emit('event2', 3, 4); // 12

sub1.release();
sub3.release();

function callback1(x, y) {
    console.log(x + y, 'event 1')
}

function callback2(x, y) {
    console.log(x * y, 'event 2')
}
