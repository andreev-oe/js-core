const inRange = (a, b) => {
    return function (currentElement) {
        return Number(currentElement) >= Number(a) && Number(currentElement) <= Number(b)
    }
};

const inArray = arr => {
    return function (currentElement) {
        return arr.includes(currentElement)
    }
};

const notInArray = arr =>  {
    return function (currentElement) {
        return !arr.includes(currentElement)
    }
};

// arr.filter(inRange(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// arr.filter(notInArray([1,2,3])) – выбирает только те элементы,
//     которые не совпадают ни с одним из элементов массива
// Пример:
//
// let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

// console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
// console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
// console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]