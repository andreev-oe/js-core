class Calc {
    constructor(startValue) {
        this.startValue = startValue;
        this.resultValue = 0
    }
    add(number) {
        if (this.resultValue === 0) {
            this.resultValue = this.startValue + number
            return this
        }
        this.resultValue += number

        return this
    }
    sub(number) {
        if (this.resultValue === 0) {
            this.resultValue = this.startValue - number
            return this
        }
        this.resultValue -= number
        return this
    }
    result() {
        return this.resultValue
    }
}

const calc = new Calc();
calc.result(); // 0
calc.add(5).result(); // 0 + 5 = 5
calc.add(3).sub(10).result(); // 0 + 3 - 10 = -7

const ten = calc.add(10);
ten.sub(5).result(); // 10 - 5 = 5
ten.result(); // 10

const calc1 = new Calc(10);
console.log(calc1.add(5).sub(2).sub(25).add(1).result())
// console.log(calc1.add(5).add(50).sub(55).result())

