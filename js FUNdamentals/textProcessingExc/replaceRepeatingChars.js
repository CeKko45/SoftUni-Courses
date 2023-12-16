function replaceRepeatingChars(string) {
    let result = [];
    let lastCh = "";
    for(let ch of string) {
        if(ch === lastCh) {
            continue;
        }
        lastCh = ch;
        result.push(ch);
    }
    console.log(result.join(""));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');