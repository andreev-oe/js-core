const areBracketsBalanced = (str) => {
    let bracketsCount= 0;

    if (!str.length) {
        return true
    } else if (str[0] === ')') {
        return false
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            bracketsCount++
        } else if (str[i] === ')' && bracketsCount) {
            bracketsCount--
        } else if (!bracketsCount) {
            return false
        }
    }
    return bracketsCount === 0
};