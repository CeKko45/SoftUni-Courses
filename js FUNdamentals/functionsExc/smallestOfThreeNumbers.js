function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    function numberInArr(firstNum, secondNum, thirdNum) {
        let arr = [];
        arr.push(firstNum, secondNum ,thirdNum);
        return arr;
    }
    function smallestNumberFinder(arr) {
        let currentNum = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < currentNum) {
                currentNum = arr[i];
            }
        }
        return currentNum;
    }
    let arr = numberInArr(firstNum, secondNum ,thirdNum);
    let currentNum = smallestNumberFinder(arr);
    return currentNum;
}
console.log(smallestOfThreeNumbers(2,5,3));
console.log(smallestOfThreeNumbers(600,342,123));
console.log(smallestOfThreeNumbers(25,21,4));
console.log(smallestOfThreeNumbers(2,2,2));