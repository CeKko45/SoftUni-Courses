function pascalCaseSpliter(string) {
    let result = [];
    let lastUpperCase = string.length;
    for(let i = string.length - 1; i >=0; i--) {
        if(string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) {
            let currWord = string.substring(i, lastUpperCase);
            lastUpperCase = i;
            result.unshift(currWord);
        }
    }
    console.log(result.join(", "));
}
pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSpliter('HoldTheDoor');
pascalCaseSpliter('ThisIsSoAnnoyingToDo');