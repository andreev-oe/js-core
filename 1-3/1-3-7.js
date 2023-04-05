function partition (array, callback = (element) => Boolean(element)) {
    const trueArray  = []
    const falseArray  = []
    array.map((element) => {
        callback(element) ? trueArray.push(element) : falseArray.push(element)
    })
    return [trueArray, falseArray]
}

// const numbers = [1,2,3,4,5,6];
//
// partition(numbers, (element) => element > 3);
// // => [
// //     [4, 5, 6], // trueArray
// //     [1, 2, 3]  // falseArray
// // ];
// // const numbers = [0, 1, 2, {}, false, "", "0"];
// //
// // partition(numbers, (element) => element);
// // => [
// //     [1, 2, {}, "0"], // trueArray
// //     [0, false, ""]  // falseArray
// // ];
// // Посложнее
//
// const users = [
//     { 'user': 'barney',  'age': 36, 'active': false },
//     { 'user': 'fred',    'age': 40, 'active': true },
//     { 'user': 'pebbles', 'age': 1,  'active': false }
// ];
//
// partition(users, (element) => element.active );
// // => [
// //     [
// //         { 'user': 'fred',    'age': 40, 'active': true }
// //     ],
// //     [
// //         { 'user': 'barney',  'age': 36, 'active': false },
// //         { 'user': 'pebbles', 'age': 1,  'active': false }
// //     ]
// // ]