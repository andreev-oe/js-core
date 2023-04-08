const sum = (...rest) => {
    return rest.reduce((acc, element) => {
        const number = Number(element)
        if (number) {
            return acc + number
        }
        return acc
    }, 0)
};

// console.log(
//     sum(1, 2, 3, 4, 5, 6),
// ); // 21
// console.log(
//     sum(-10, 15, 100),
// ); // 105
// console.log(
//     sum(),
// ); // 0
// console.log(
//     sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
// ); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)