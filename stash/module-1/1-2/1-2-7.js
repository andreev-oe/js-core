const arithmetic = (a, b, operator) => {
    switch (operator) {
        case "add":
            return a + b
        case "subtract":
            return a - b
        case "multiply":
            return a * b
        case "divide":
            return a / b
        default:
            return NaN
    }
};

// arithmetic(5, 2, "add")      //=> returns 7
// arithmetic(5, 2, "subtract") //=> returns 3
// arithmetic(5, 2, "multiply") //=> returns 10
// arithmetic(5, 2, "divide")   //=> returns 2.5
// arithmetic(5, 2, "aaa")      //=> returns NaN