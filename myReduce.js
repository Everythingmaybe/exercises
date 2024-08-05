Array.prototype.myReduce = function(callback, initValue) {
    let acc = initValue ?? this[0];

    for(let i = initValue === undefined ? 1 : 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }

    return acc;
}

console.log([10,10,10,10].myReduce((s, e) => s + e, 10));
