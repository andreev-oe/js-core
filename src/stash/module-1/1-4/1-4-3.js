const getField = (data, field) => {
    return data.map((element) => element[field])
};

// const data = [
//     {
//         name: 'Denis',
//         age: 25,
//     },
//     {
//         name: 'Ivan',
//     },
//     {
//         name: 'Ann',
//         age: 18,
//     },
// ];
//
// console.log(getField(data, 'age'));
// // [25, undefined, 18]