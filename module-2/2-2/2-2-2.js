function invert (obj) {
    return Object.fromEntries(Object.entries(obj).map((entry) => entry.reverse()))
}

// invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }
