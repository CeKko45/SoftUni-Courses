function repeatString(str, repetitions) {
    newStr = "";
    for (let i = 0; i < repetitions; i++) {
        newStr += str;
    }
    return newStr;
}
repeatString("abc", 3);
repeatString("abc", 3);