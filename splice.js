function splice(array, start, deleteCount = 0, ...items) {
    const deleted = [];
    if (start < 0) start = array.length + start;
    if (start > array.length) start = array.length;
    if (deleteCount > 0) {
        if (deleteCount + start > array.length) deleteCount = array.length - start;
        const length = array.length;
        for(let i = start; i < length; i++) {
            if (i >= start && i <= start + deleteCount - 1) {
                deleted.push(array[i]);
            }
            array[i] = array[i + deleteCount];
        }
        array.length = length - deleteCount;
    }

    if (items.length) {
        const length = array.length;
        for(let i = length - 1; i >= start; i--) {
            array[i + items.length] = array[i];
        }

        for(let i = 0; i < items.length; i++) {
            array[i + start] = items[i];
        }
    }

    return deleted
}

const arr = [1,2,3,4,5];

console.log(splice(arr, 1, 2)); // [2, 3]
console.log(arr) // [1, 4, 5] [1,2]
console.log(splice(arr, 0, 0, 'first', 'second')); // []
console.log(arr) // [1, 4, first, second, 5]
