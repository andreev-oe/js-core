function deepEqual (obj1, obj2) {
    if (typeof obj1 === 'object' && typeof obj2 === 'object' && obj1 === obj2 && obj1 !== null && obj2 !== null) {
        return deepEqual (obj1, obj2)
    }
    try {
    return JSON.stringify(obj1).split('').sort().join('') === JSON.stringify(obj2).split('').sort().join('')
    } catch (error) {
        return deepEqual (obj1, obj2)
    }
}

const firstObject = {
    a: {
        b: {
            c: 1,
            d: 'string',
            e: {
                num: 1
            }
        }
    }
};

const secondObject = {
    a: {
        b: {
            e: {
                num: 1,
            },
            d: 'string',
            c: 1,
        }
    }
};

// deepEqual(firstObject, secondObject); // true
// deepEqual({ a:1, b: 3 }, { b: 2, a: 1}); // false
// deepEqual(1, 2); // false
// deepEqual(true, false); // false
