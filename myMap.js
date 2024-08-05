Array.prototype.myMap = function(callback) {
    const arr = Array(this.length);

    for(let i = 0; i < this.length; i++) {
        arr[i] = callback(this[i], i, this);
    }

    return arr;
}

console.log([10,10,10,10].myMap((n, i) => n * i));
