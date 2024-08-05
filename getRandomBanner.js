const banners = [{w: 10, id: 1}, {w: 130, id: 2}, {w: 500, id: 3}, {w: 1, id: 4}];
let sum = 0;
const mappedBanners = banners
    .map((x) => ({...x, endW: sum = sum + x.w}))
    .sort((a, b) => a.endW - b.endW);

function getRandBanner() {
    const sum = banners.reduce((sum, { w }) => sum + w, 0);
    const randomW = Math.random() * sum;

    let tempSum = 0;
    for (const banner of banners) {
        tempSum += banner.w;
        if (tempSum >= randomW) {
            return banner;
        }
    }
}

function getRandBannerBinary() {
    const randomW = Math.random() * sum;
    return binarySearch(mappedBanners, randomW, 0, mappedBanners.length - 1);
}

function binarySearch(array, target, start, end) {
    const m = Math.floor((start + end)/2);
    if (target == array[m].endW) return array[m];
    if (end - 1 === start) return target > array[start].endW ? array[end] : array[start];
    if (target > array[m].endW) return binarySearch(array, target, m, end);
    if (target < array[m].endW) return binarySearch(array, target, start, m);
}

console.clear();

// console.log(getRandBannerBinary());
console.time('test');
console.log(Array(1e6)
    .fill(undefined)
    .map(() => getRandBannerBinary())
    .reduce((result, item) => {
        if (!result[item.w]) {
            result[item.w] = 0;
        }
        result[item.w]++;
        return result;
    }, {})
);
console.timeEnd('test');
console.time('test');
console.log(Array(1e6)
    .fill(undefined)
    .map(() => getRandBanner())
    .reduce((result, item) => {
        if (!result[item.w]) {
            result[item.w] = 0;
        }
        result[item.w]++;
        return result;
    }, {})
);
console.timeEnd('test');
