function arrayToCsv(data) {
    let resultString = ''
    const regExp1 = /["]/gm
    data.forEach((element) => {
        element.forEach((item,index) => {
            if (typeof item !== 'string' && typeof item !== 'number') {
                throw new Error('Unexpected value')
            }
            if (typeof item === 'string') {
                element[index] = item.replace(regExp1, '\"\"')
                element[index] = `\"${element[index]}\"`
            }
        })
        resultString = resultString + `${element.toString()}\n`
    })
    return resultString
}

arrayToCsv([['"text"', 'other "long" text']])
arrayToCsv([[1, 2], ['a', 'b']])
// 1,2
// a,b
arrayToCsv([[1, 2], ['a,b', 'c,d']])
// 1,2
// "a,b","c,d"
