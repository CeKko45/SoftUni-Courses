function sortingNumbers(arr) {
    let resultArr = [];
    let sortedAscendingArr = arr.sort((numA, numB) => numA - numB);
    while (sortedAscendingArr.length > 0) {
        let firstNum = sortedAscendingArr.shift();
        let secondNum = sortedAscendingArr.pop();
        resultArr.push(firstNum, secondNum);
    }
    return resultArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));