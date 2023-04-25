const getArraysCounts = (arr) => {
    return arr.reduce((acc, arrElement) => !acc.has(arrElement) ? acc.set(arrElement, 1) : acc.set(arrElement, acc.get(arrElement) + 1), new Map())
};
//
// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2