function arrayToCsv(data) {
    let resultString = ''
    const regExpQuotes = /"/gm
    const regExpComma = /,/
    data.forEach((element, i) => {
        element.forEach((item, j) => {
            if (typeof item !== 'string' && typeof item !== 'number') {
                throw new Error('Unexpected value')
            }
            if (regExpQuotes.test(item)) {
                element[j] = `\"${item.replace(regExpQuotes, '\"\"')}\"`
            }
            if (regExpComma.test(item)) {
                element[j] = `\"${item}\"`
            }
        })
        if (data[data.length-1] === data[i]) {
            resultString = resultString + element
        } else {
            resultString = resultString + `${element}\n`
        }
    })
    return resultString
}

// arrayToCsv([['1,2,3','4,5'],[',,,,', 1]])
// // "1,2,3","4,5"
// // ",,,,",1
// arrayToCsv([['"text"', 'other "long" text']])
// // """text""","other ""long"" text"
// arrayToCsv([[1, 2],[3,4],['a', 'b']])
// // 1,2
// // 3,4
// // a,b
// arrayToCsv([[1, 2], ['a,b', 'c,d']])
// // 1,2
// // "a,b","c,d"
