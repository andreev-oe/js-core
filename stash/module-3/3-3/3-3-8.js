function promiseAll(promises) {
    if (promises.length === 0) {
        return new Promise(resolve => resolve([]))
    }
    const result = new Array(promises.length)
    return new Promise((resolve) => {
        promises.forEach((promise, index) => {
            promise.then((data) => {
                result[index] = data
                if (index === result.length - 1) {
                    return resolve(result)
                }
            })
        })
    })
}

// const firstPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(300), 300)
// );
//
// const secondPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(200), 200)
// );
//
// const thirdPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(100), 100)
// );
//
// promiseAll([firstPromise, secondPromise, thirdPromise])
//     .then(console.log); // [300, 200, 100]
