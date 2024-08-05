const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York'
    },
    {
        name: 'Johan',
        city: 'Berlin'
    },
]

const groupByCity = (arr) => {
    let result = {}

    for(let {city, name} of arr) {
        if (!result[city]) {
            result[city] = name;
        } else if (Array.isArray(result[city])) {
            result[city].push(name)
        } else {
            result[city] = [result[city], name]
        }
    }

    return result;
}

console.log(groupByCity(people))
