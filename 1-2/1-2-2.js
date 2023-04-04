const lettersCount = (str) => {
    const charsAmount = {};
    str.toLowerCase().split('').forEach((element) => {
        [element] in charsAmount ? charsAmount[element] +=1 : charsAmount[element] = 1;
    })
    return charsAmount
};

// console.log(lettersCount('aAAbbccde'));
// // {
// //    a: 3,
// //    b: 2,
// //    c: 2,
// //    d: 1,
// //    e: 1,
// // }