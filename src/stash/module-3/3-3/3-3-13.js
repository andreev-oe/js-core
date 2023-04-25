const throttle = (fn, throttleTime) => {
    let isProcessing = false
    return function(...data) {
        if (!isProcessing) {
            isProcessing = true
            fn.apply(this, data)
            setTimeout(() => isProcessing = false, throttleTime)
        }
    }
};

// let counter = 0;
// const fn = () => {
//     counter++;
// };
//
// const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс
//
// const intervalId = setInterval(throttledFn, 100);
// setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов
// console.log(counter); // 3