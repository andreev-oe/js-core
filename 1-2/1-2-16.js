const hasArrays = (arr) => {
    return arr.some((arrElement) => Array.isArray(arrElement))
};

// const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
// console.log(hasArrays(data1));
// // true
//
// const data2 = [];
// console.log(hasArrays(data2));
// // false