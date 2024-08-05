const arr = [1,43,1,0,-1,2344,-3,3,4,1923]

function quick(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr.pop();
    const left = arr.filter(e => pivot > e);
    const right = arr.filter(e => pivot <= e);
    return [...quick(left), pivot, ...quick(right)];
}

console.log(quick(arr))
