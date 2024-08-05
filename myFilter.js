Array.prototype.myFilter = function(callback) {
    const arr = [];

    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) arr.push(this[i])
    }

    return arr;
}

console.log([1,2,3,4].myFilter((n, i) => i % 2));
