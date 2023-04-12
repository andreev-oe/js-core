Object.create = function(proto, propertiesObject) {
    if ((typeof proto === 'undefined' && typeof propertiesObject === 'undefined') || typeof  proto !== 'object'){
        throw new TypeError('prototype is null or is not object')
    }
    const newObject= new Object()
    Object.setPrototypeOf(newObject, proto)
    if (typeof propertiesObject !== 'undefined') {
        Object.defineProperties(newObject, propertiesObject)
    }
    return newObject
};

// const A = {
//     objectName: 'Object A',
//     getObjectName: function() {
//         return `This is ${this.objectName}!`;
//     },
// };
//
// const B = Object.create(A, {
//     objectName: {
//         value: 'Object B',
//     },
// });
//
// A.getObjectName(); // This is Object A!
// B.getObjectName(); // This is Object B!
//
// A.hasOwnProperty('getObjectName'); // true
// A.hasOwnProperty('objectName'); // true
//
// B.hasOwnProperty('getObjectName'); // false
// B.hasOwnProperty('objectName'); // true
//
// console.log(A.getObjectName())
// console.log(B.getObjectName())
// console.log(A.hasOwnProperty('getObjectName'))
// console.log(A.hasOwnProperty('objectName'))
// console.log(B.hasOwnProperty('getObjectName'))
// console.log(B.hasOwnProperty('objectName'))
