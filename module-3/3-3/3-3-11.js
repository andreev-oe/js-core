function promisesInSeries(asyncFns) {
    const runAsync = async () => {
        try {
            let prevData = undefined
            for (let i = 0; i < asyncFns.length; i++) {
                if (i === asyncFns.length - 1) {
                    return await asyncFns[i](prevData)
                }
                prevData = await asyncFns[i](prevData)
            }
        } catch (e) {
            return undefined
        }
    }
    return runAsync()
}

// const firstPromise = () => new Promise((resolve) => setTimeout(() => resolve(300), 300));
//
// const secondPromise = () => new Promise((resolve) => setTimeout(() => resolve(200), 200));
//
// const thirdPromise = () => new Promise((resolve) => setTimeout(() => resolve(100), 100));
//
// promisesInSeries([firstPromise, secondPromise, thirdPromise]);
// Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс