function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then(() => {
                return resolve(promise)
            }).catch((err) => {
                return reject(err)
            })
        })
    })
}

const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(300), 3000)
);

const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 2000)
);

const thirdPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 1000)
);

promiseRace([firstPromise, secondPromise, thirdPromise]); // 100
