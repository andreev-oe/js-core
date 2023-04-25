function isEmpty(obj) {
    for (const objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            return false
        }
    }
    return true
}

function isEmptyWithProtos(obj) {
    for (const objKey in obj) {
        if (objKey) {
            return false
        }
    }
    return true
}

// const obj = Object.create(null);
// isEmpty(obj); // -> true
// isEmpty({ prop: 'value' }); // -> false
//
// const protoObj = Object.create(null);
// const obj1 = Object.create(protoObj);
// isEmptyWithProtos(obj1); // -> true
// isEmptyWithProtos({}); // -> true
