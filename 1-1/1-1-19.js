const reverseLongWords = (str) => {
    return str
        .split(' ')
        .map((element) => element.length > 4 ? element.split('').reverse().join('') : element)
        .join(' ')
};

// reverseLongWords('Hey fellow warriors'); // Hey wollef sroirraw
// reverseLongWords('This is a test'); // This is a test
// reverseLongWords('This is another test'); // This is rehtona test