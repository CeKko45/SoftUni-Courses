function signCheck(numOne, numTwo, numThree) {
    let positiveOrNegative = (a) => a < 0 ? "Negative" : "Positive";
    let firstNumResult = positiveOrNegative(numOne);
    let secondNumResult = positiveOrNegative(numTwo);
    let thirdNumResult = positiveOrNegative(numThree);
    let groupResult = firstNumResult +" "+ secondNumResult +" "+ thirdNumResult;
    let groupResultArr = groupResult.split(" ");
    let isNegative = false;
    let negativeCounter = 0;
    for (let i = 0; i < groupResultArr.length; i++) {
        if (groupResultArr[i] === "Negative") {
            isNegative = true;
            negativeCounter++;
            if (negativeCounter === 2) {
                isNegative = false;
                negativeCounter = 0;
            }

        }
    }
    return (isNegative ? "Negative" : "Positive");
}
console.log(signCheck( 5,12,-15));
console.log(signCheck(-6,-12,14));
console.log(signCheck(-1,-2,-3));
console.log(signCheck(-5,1,1));
