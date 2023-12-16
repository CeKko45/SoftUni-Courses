function revealWords(words, string) {
    let arrWords = words.split(", ");
    let arrString= string.split(" ");
    for(let word of arrWords) {
        for(let i = 0;i < arrString.length; i++) {
            if(arrString[i].includes("*") && arrString[i].length === word.length) {
                arrString[i] = word;
            }
        }
    }
    console.log(arrString.join(" "));
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);