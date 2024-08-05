console.clear();
//Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression
//
// Example:
//
// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right.
// Additions and subtractions have a lower priority and should also be performed left-to-right.

function evaluate(string) {
    const operation = (operator, first, second) => {
        switch (operator) {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '*':
                return first * second;
            case '/':
                return first / second;
        }
    };
    const separators = /[/+-/*]/gm;
    const operators = (string.match(separators) || []).sort((a, b) => {
        if ((a === '*' || a === '/') && (b !== '*' || b !== '/')) {
            return -1;
        }
        return 0;
    });
    operators.forEach((operator) => {
        const expressionString = string.match(RegExp(`(-?[\\d.]+\\s\\${operator}\\s-?[\\d.]+)`))[0];
        const [ first, second ] = expressionString.match(/-?[\d.]+/g).map((num) => Number(num));
        string = string.replace(`${first} ${operator} ${second}`, operation(operator, first, second));
    });
    return Number(string);
}

console.log(evaluate("2 / 2 + 3 * 4 - 6"));
