function charactersInRange(firstChar, secondChar) {
    function charToCharCode(num) {
        return num.charCodeAt(0);
    }
    function smallerOfTheTwo(firstChar, secondChar) {
        return Math.min(firstChar, secondChar);
    }
    function biggerOfTheTwo(firstChar, secondChar) {
        return Math.max(firstChar, secondChar)
    }
    function concatenationString(buff, string) {
        buff += string + " ";
        return buff;
    }
    function convertFromNumToChar(num) {
        return String.fromCharCode(num);
    }
    function logCharInOrder(firstChar, secondChar) {
        let buff = "";
        for (let i = firstChar + 1; i < secondChar; i++) {
            buff = concatenationString(buff, convertFromNumToChar(i));
        }
        return buff;
    }
    firstChar = charToCharCode(firstChar);
    secondChar = charToCharCode(secondChar);
    let firstCharIndex = smallerOfTheTwo(firstChar, secondChar);
    let secondCharIndex = biggerOfTheTwo(firstChar, secondChar);
    let result = logCharInOrder(firstCharIndex, secondCharIndex);
    return result;
}
console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));