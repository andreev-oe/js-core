const hasArrays = (arr) => {
    for (const arrElement of arr) {
        if (Array.isArray(arrElement)) {
            return true
        }
    }
    return false
};

// const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
// console.log(hasArrays(data1));
// // true
//
// const data2 = [];
// console.log(hasArrays(data2));
// // false