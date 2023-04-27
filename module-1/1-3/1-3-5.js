function optionalChaining (obj, chain) {
    let objElement = obj[chain[0]];
    if (!objElement) {
        return objElement
    }
    if (chain.length - 1 > 0) {
        chain.shift();
        objElement = optionalChaining(objElement, chain)
    }
    return objElement
}

const obj = {
    a: {
        b: {
            c: {
                d: 'Привет!'
            }
        }
    }
}
// optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
// optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined
// optionalChaining(obj, ["a", "c", "d"]) // undefined
// optionalChaining(obj, ["b", "d", "a"]) // undefined
