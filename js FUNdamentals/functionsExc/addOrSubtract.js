function addOrSubtract(firstNum, secondNum, thirdNum) {
    function sumTwoNum(firstNum, secondNum) {
        let result = firstNum + secondNum;
        return result;
    }
    function subtractTwoNum(firstNum, secondNum) {
        let result = firstNum - secondNum;
        return result;
    }
    let firstResult = sumTwoNum(firstNum, secondNum);
    let finalResult = subtractTwoNum(firstResult, thirdNum);
    return finalResult;

}
console.log(addOrSubtract(23,6,10));
console.log(addOrSubtract(1,17,30));
console.log(addOrSubtract(42,58,100));