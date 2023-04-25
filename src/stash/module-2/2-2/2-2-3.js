function deepEqual(obj1, obj2) {
    if (obj1 === null && obj2 === null) {
        return true
    }
    if (obj1 === null && obj2 !== null || obj1 !== null && obj2 === null) {
        return false
    }
    if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
        return obj1 === obj2
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const values1 = obj1[key];
        const values2 = obj2[key];
        const areObjects = values1 != null && typeof values1 === 'object' && values2 != null && typeof values2 === 'object';
        if (areObjects && !deepEqual(values1, values2) || !areObjects && values1 !== values2) {
            return false;
        }
    }
    return true;
}

// const firstObject = {
//     a: {
//         b: {
//             c: null,
//             d: 'string',
//             e: {
//                 num: 1
//             }
//         }
//     }
// };
//
// const secondObject = {
//     a: {
//         b: {
//             e: {
//                 num: 1,
//             },
//             d: 'string',
//             c: null,
//         }
//     }
// };
//
// deepEqual({"name":"Misha","order":{"price":20}}, {"order":{"price":20},"name":"Misha"})
// deepEqual({"name":"Misha","order":{"price":null,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11}}}}}, {"name":"Misha","order":{"count":1,"price":20,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withTaxes":{"vat":{"uah":30,"usd":1.11}},"withoutTaxes":{"usd":0.74,"uah":20}}}})
// deepEqual(firstObject, secondObject); // true
// deepEqual(1, 2); // false
// deepEqual(true, false); // false
