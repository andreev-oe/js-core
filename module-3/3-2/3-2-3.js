function incrementCounter(counterName){
    try {
        const localCounters = JSON.parse(localStorage.getItem('counters'))
        if (localCounters[counterName]) {
            localCounters[counterName] = Number(localCounters[counterName]) + 1
        } else {
            localCounters[counterName] = 1
        }
        localStorage.setItem('counters', JSON.stringify(localCounters))
        return JSON.parse(localStorage.getItem('counters'))[counterName]
    } catch (e) {
        const localTargetCounter = {
            [counterName]: 1
        }
        localStorage.setItem('counters', JSON.stringify(localTargetCounter))
        return JSON.parse(localStorage.getItem('counters'))[counterName]
    }
}

// // в localStorage 1 счетчик: bannerClick = 5
// incrementCounter('bannerClick'); // 6
// incrementCounter('bannerClose'); // 1
// // в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1