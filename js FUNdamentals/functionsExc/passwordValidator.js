function passwordValidator(pass) {
    function charToCharCode(char) {
        return char.charCodeAt(0);
    }
    function charCodeNumCheck (num) {
        return num >= 48 && num <= 57;
    }
    function charCodeUpperCaseCheck (num) {
        return num >= 65 && num <=90;
    }
    function charCodeLowerCaseCheck (num) {
        return num >= 97 && num <= 122;
    }
    let validPass = true;
    let isNeitherLetterNorDigit = false;
    let charCounter = 0;
    let digitCounter = 0;
    let passSplit = pass.split("");
    for (let i = 0; i < passSplit.length; i++) {
        charCounter++;
        let charFromPass = charToCharCode(passSplit[i]);
        let isNum = charCodeNumCheck(charFromPass);
        if (isNum) {
            digitCounter++;
        }
        let isUpperCase = charCodeUpperCaseCheck(charFromPass);
        let isLowerCase = charCodeLowerCaseCheck(charFromPass);
        if (!isNum && !isUpperCase && !isLowerCase) {
            isNeitherLetterNorDigit = true;
        }
    }
    if (charCounter < 6 || charCounter > 10) {
        console.log("Password must be between 6 and 10 characters");
        validPass = false;
    }
    if (isNeitherLetterNorDigit) {
        console.log("Password must consist only of letters and digits");
        validPass = false;
    }
    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits");
        validPass = false;
    }
    if (validPass) {
        console.log("Password is valid");
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');