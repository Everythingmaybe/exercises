Array.prototype.some1 = function(callback) {
    for(let n of this) {
        if (callback(n)) return true
    }

    return false
}
console.log([2,5,8,1,4].some1((e) => e > 10) )//false
console.log([12,5,8,1,4].some1((e) => e > 10)) //true
