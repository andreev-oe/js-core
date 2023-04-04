function findAllIdx(arr, value) {
    const indexes = [];
    arr.forEach((element, index) => {
        if (element === value) {
            indexes.push(index)
        }
    })
    return indexes
}

// findAllIdx([1,0,1,0,0,1], 0) // [1,3,4]
// findAllIdx([1,1], 0) // []
