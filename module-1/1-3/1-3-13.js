const createObjectCalculator = (initialA, initialB) => {
    return {
        A: initialA,
        B: initialB,
        sum() {
            return this.A + this.B
        },
        mul() {
            return this.A * this.B
        },
        read(newA, newB) {
            this.A = newA;
            this.B = newB;
        }
    }
};

// const calculator = createObjectCalculator(2, 3);
// console.log(calculator.sum()); // 2 + 3 = 5
// console.log(calculator.mul()); // 2 * 3 = 6
// calculator.read(12, 34);
// console.log(calculator.sum()); // 12 + 34 = 46
// console.log(calculator.mul()); // 12 * 34 = 408