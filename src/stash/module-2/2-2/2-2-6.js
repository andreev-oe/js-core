const merge = (...rest) => rest.reduce((acc, item) => ({...acc, ...item}), {});

// console.log(
//     merge(
//         {
//             name: 'John',
//             age: 22,
//         },
//         {
//             surname: 'Klein',
//             age: 20,
//             profession: 'student',
//         },
//         {
//             profession: 'frontend developer',
//             country: 'USA',
//         }
//     )
// );
//
// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }