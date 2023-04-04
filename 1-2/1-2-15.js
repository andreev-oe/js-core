const moveToStart = (arr, n) => {
    const trasformedArr = arr.slice();
    if (n >= arr.length) {
        return trasformedArr
    }
    for (let i = 0; i < n; i++) {
        trasformedArr.unshift(trasformedArr.pop());
    }
    return trasformedArr
};

// console.log(
//     moveToStart([1, 2, 3, 4, 5], 3)
// ); // [3, 4, 5, 1, 2]
//
// console.log(
//     moveToStart([1, 2, 3, 4, 5], 100)
// ); // [1, 2, 3, 4, 5]