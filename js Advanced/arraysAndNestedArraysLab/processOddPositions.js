function processOddPositions(arr) {
    let resultArr = [];
    for(let i = 1; i <= arr.length; i++) {
        if(i % 2 !== 0) {
            resultArr.unshift(arr[i] * 2);
        }
    }
    return resultArr;
}
console.log(processOddPositions([10, 15, 20, 25] ));
console.log(processOddPositions([3, 0, 10, 4, 7, 3] ));