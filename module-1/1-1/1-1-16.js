function compareWithPrecision(a, b, precision) {
    return a >= b
        ? a - b <= precision
        : b - a <= precision
}