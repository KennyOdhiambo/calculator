function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(x, y, z) {
    x = parseFloat(prompt("First number: ", 1));
    y = parseFloat(prompt("Second number: ", 1))
    z = prompt("Choose operator: +, -, X, /", "+")

    if (z = "+") {
        add(x, y)
    } else if (z = "-") {
        subtract(x, y)
    } else if ((z = "x") || (z = "X")) {
        multiply(x, y)
    } else if (z = "/") {
        divide(x, y)
    }
}