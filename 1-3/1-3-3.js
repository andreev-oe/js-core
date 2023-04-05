function sequenceSum (begin, end) {
    if (begin === end) {
        return begin
    }
    if (begin > end) {
        return NaN
    }
    return begin += sequenceSum(begin + 1, end)
}

// // NaN (т.к. это "пустая" последовательность)
// sequenceSum(7, 2);
// // 0 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(0, 0);
// // 6 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(6, 6);

// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
// sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
