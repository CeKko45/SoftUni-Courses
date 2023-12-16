function lowerOrUpper(givenChar) {
    if (givenChar.charCodeAt(0) >= 65 && givenChar.charCodeAt(0) <= 90) {
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}
lowerOrUpper('L');
lowerOrUpper('f');