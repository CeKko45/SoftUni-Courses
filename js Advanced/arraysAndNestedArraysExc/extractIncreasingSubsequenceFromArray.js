function extractIncreasingSubsequenceFromArray(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let output = arr.reduce((acc, currentNum) => {
        if (currentNum >= biggestNum) {
            biggestNum = currentNum;
            let tempArr = acc;
            tempArr.push(currentNum);
            return tempArr;
        }
        return acc;
    }, [])
    return output;
}
console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log(extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]));
console.log(extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]));