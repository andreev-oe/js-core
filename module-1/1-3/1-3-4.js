function getStringCount(object) {
    let sum = 0;
    for (const key in object) {
        if (typeof object[key] === 'string') {
            sum = sum + 1;
        }
        if (typeof object[key] === 'object') {
            sum += getStringCount(object[key])
        }
    }
    return sum
}

// getStringCount
// ({
//     first: '1',
//     second: '2',
//     third: false,
//     fourth: ['anytime', 2, 3, 4 ],
//     fifth:  null,
// }); // 3

// getStringCount(['1', '2', ['3']]) // 3
