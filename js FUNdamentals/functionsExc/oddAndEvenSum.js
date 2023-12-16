function oddAndEvenSum(num) {
    function stringToNum(str) {
        return Number(str);
    }
    function numberToString (num) {
        return String(num);
    }
    function stringToArr (str) {
        return str.split("");
    }
    let evenSum = 0;
    let oddSum = 0;
    let numToString = numberToString(num);
    let numToArr = stringToArr(numToString);
    for (let i = 0; i < numToArr.length; i++) {
        if (numToArr[i] % 2 === 0) {
            evenSum += stringToNum(numToArr[i]);
        } else {
            oddSum += stringToNum(numToArr[i]);
        }
    }
    return console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);