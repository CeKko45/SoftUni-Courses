function stringSubstring(searchedWord, text) {
let lowCaseText = text.toLowerCase().split(" ");
let isConined = false;
for(let word of lowCaseText) {
    if(word === searchedWord) {
        isConined = true;
        break;
    }
}
if(isConined) {
    console.log(searchedWord);
} else {
    console.log(`${searchedWord} not found!`);
}
}
stringSubstring('javascript',
'JavaScript is the best programming language'
);
stringSubstring('python',
'JavaScript is the best programming language'
);