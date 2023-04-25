const defaultTo = (value, defaultValue) => {
    return Number(value) ? value : defaultValue
};

// console.log(defaultTo(1, 10)); // 1;
// console.log(defaultTo(undefined, 10)); // 10;