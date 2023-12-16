function aggregateElements(arr) {
    let sumResult = 0;
    let inverseResult = 0;
    let concatResult = "";
    for (const digit of arr) {
        sumResult += digit;
    }
    console.log(sumResult);
    for (const digit of arr) {
        inverseResult = (1 / digit) + inverseResult;
    }
    console.log(inverseResult);
    for (const digit of arr) {
        concatResult += String(digit);
    }
    console.log(concatResult);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);