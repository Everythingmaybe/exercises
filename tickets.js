const tickets = [
    {from: 'Калининград', to: 'Челябинск'},
    {from: 'Челябинск', to: 'Астана'},
    {from: 'Краснодар', to: 'Москва'},
    {from: 'Москва', to: 'Калининград'},
    {from: 'Пятигорск', to: 'Краснодар'},
]

function sortTickets(tickets) {
    const map = new Map();
    const set = new Set();

    for(let {from, to} of tickets) {
        map.set(from, to);
        set.add(to);
    }

    const result = [];
    let current = tickets.find((t) => !set.has(t.from)).from;

    while(map.has(current)) {
        result.push({from: current, to: map.get(current)});
        current = map.get(current);
    }

    return result;
}

console.log(sortTickets(tickets))
