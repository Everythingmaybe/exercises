class NewLocalStorage {
    static setItem(key, value, date) {
        const valueWithDate = { value, date: new Date(date).getTime() };
        localStorage.setItem(key, JSON.stringify(valueWithDate));
    }

    static getItem(key) {
        const value = localStorage.getItem(key);
        if (!value) return null;

        const valueWithDate = JSON.parse(value);
        if (Date.now() >= new Date(valueWithDate.date).getTime()) {
            return valueWithDate.value;
        }

        localStorage.removeItem(key)

        return null;
    }
}

console.log()
