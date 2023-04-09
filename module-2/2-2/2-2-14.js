const getDaysBetweenDates = (...dates) => {
    const originalDate1 = dates[0]
    const originalDate2 = dates[1]
    if (dates.length < 2) {
        throw new TypeError()
    } else if ((typeof originalDate1 === 'number' && typeof originalDate2 === 'number') || (originalDate1 === null || originalDate2 === null)) {
        return (Math.trunc((new Date(originalDate2) - new Date(originalDate1)) / (1000 * 60 * 60 * 24)) + 0)
    } else {
        return (Math.trunc((Date.parse(originalDate2) - Date.parse(originalDate1)) / (1000 * 60 * 60 * 24)) + 0)
    }
};

// getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1
// getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366
// getDaysBetweenDates(1409796000000, 1409925600000); // -> 1
// getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN
// getDaysBetweenDates(null); // -> TypeError