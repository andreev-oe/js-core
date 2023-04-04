function replaceItemsClear(arr, item, replaceItem) {
   return arr.map((element) => element === item ? element = replaceItem : element)
}

function replaceItemsMutate(arr, item, replaceItem) {
    arr.forEach((element, index) => element === item ? arr[index] = replaceItem : element)
    return arr
}

// replaceItemsClear([1,2,3,4,2], 2, 'a'); //  [1,'a',3,4,'a']
// const arr = [1,2,3,4,2];
// replaceItemsMutate(arr, 2, 'a');
// console.log(arr); // [1,'a',3,4,'a']