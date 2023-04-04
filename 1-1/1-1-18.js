function capitalize(str){
    return str
        .toLowerCase()
        .split(' ')
        .map((element) => (element[0].toUpperCase() + element.slice(1)))
        .join(' ')
}

// const str = 'sOme RanDoM sTRING';
// console.log(capitalize(str)); // Some Random String