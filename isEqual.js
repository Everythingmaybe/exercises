const firstCar = {
    name: 'John',
    child: {
        name: 'za',
        type: [6,4,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    },
    children: [
        {
            name: 'Iue',
            class: 'zzz'
        },
        {
            name: 'January',
            class: '2222'
        }
    ]
}
const secondCar = {
    name: 'John',
    child: {
        name: 'za',
        type: [6,4,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    },
    children: [
        {
            name: 'Iue',
            class: 'zzz'
        },
        {
            name: 'January',
            class: '2222'
        }
        ,
        {
            name: 'Iuezz',
            class: 'za'
        }
    ]
}
const thirdCar = {
    name: 'John',
    child: {
        name: 'za',
        type: [6,4,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    },
    children: [
        {
            name: 'Iue2',
            class: 'zzz'
        },
        {
            name: 'January',
            class: '2222'
        }
    ]
}
const fourthCar = {
    name: 'John',
    child: {
        name: 'za',
        type: [6,4,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    },
    children: [
        {
            name: 'Iue',
            class: 'zzz'
        },
        {
            name: 'January',
            class: '2222'
        }
    ]
}


console.log(isEqual(firstCar, secondCar));
console.log(isEqual(firstCar, thirdCar));
console.log(isEqual(firstCar, fourthCar));

function isEqual(first, second) {
    const isObjects = typeof first === 'object' && typeof second === 'object';

    if (!isObjects) return first === second;

    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);

    if (firstKeys.length !== secondKeys.length) return false;

    for (let i in firstKeys) {
        // if (firstKeys[i] !== secondKeys[i]) return false;
        if (!isEqual(first[firstKeys[i]], second[secondKeys[i]])) return false;
    }

    return true;
}
