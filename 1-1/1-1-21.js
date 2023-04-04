function wrapInParagraph(str){
    return str.split('\n').map((element) => `<p>${element}</p>`).join('\n')
}

// const text = `Some
// simple multiline
// text`;

// console.log(wrapInParagraph(text));
// <p>Some</p>
// <p>simple multiline</p>
// <p>text</p>

// const text2 = 'some\ntext';

// console.log(wrapInParagraph(text2));
// <p>some</p>
// <p>text</p>