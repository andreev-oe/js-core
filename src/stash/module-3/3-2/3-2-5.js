class ExecutionError extends Error {
    constructor(element, stack) {
        super('Unable to execute')
        this.name = 'ExecutionError '
        this.element = element
        this.stack = stack
    }
    getArgData() {
        return this.element
    }
}

function applyFn(dataArr, callback) {
    const result = {
        errors: [],
        succeeded: []
    }
    dataArr.forEach((element) => {
        try {
            callback(element)
            result.succeeded.push(`${element}ok`)
        } catch (error) {
            result.errors.push(new ExecutionError(element, error.stack))
        }
    })
    return result
}

// const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
// //   succeeded: [2, 3, 4],
// //   errors: [],
// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);
// //   succeeded: [{ login: 'login', password: "password" }],
// //   errors: [ExecutionError],
// errors[0].getArgData(); // '{}'