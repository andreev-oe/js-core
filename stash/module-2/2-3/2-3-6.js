class Addition {
    constructor (num) {
        this.num = num;
    }

    add (...nums) {
        const sum = (a, b) => a + b;
        return this.num + nums.reduce(sum);
    }
}
// Write you code here
function logDecorator(fn) {
    return function () {
        let result = fn.apply(this, arguments)
        console.log('called')
        return result
    }
}

Addition.prototype.add = logDecorator(Addition.prototype.add)

// End of code

// const startedValue = new Addition(5);
// const result = startedValue.add(3,5,6) //В консоль выводится "called"
// console.log(result) //В консоль выводится 19
//
//
// const startedValue1 = new Addition(13);
// const result1 = startedValue1.add(3,5,6) //В консоль выводится "called"
// console.log(result1) //В консоль выводится 19
