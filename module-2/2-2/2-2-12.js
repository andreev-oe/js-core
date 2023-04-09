const unique = (arr) => {
    return [...new Set(arr)]
};

// const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]
//
// const obj = { name: 'John' };
// const data2 = [obj, obj, obj, { name: 'John' }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]
//
// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false