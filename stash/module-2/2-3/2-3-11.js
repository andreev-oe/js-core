class Calc {
    constructor(startValue = 0) {
        this.resultValue = startValue
    }
    add(number) {
        return new Calc(this.resultValue + number)
    }
    sub(number) {
        return new Calc(this.resultValue - number)
    }
    result() {
        return this.resultValue
    }
}

// const calc = new Calc();
// calc.result(); // 0
// calc.add(5).result(); // 0 + 5 = 5
// calc.add(3).sub(10).result(); // 0 + 3 - 10 = -7
//
// const ten = calc.add(10);
// ten.sub(5).result(); // 10 - 5 = 5
// ten.result(); // 10

