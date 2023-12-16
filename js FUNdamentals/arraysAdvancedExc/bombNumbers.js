function bombNumbers(sequenceArr, specialArr) {
    function sumArr(arr) {
        let arrSum = 0;
        for (let i = 0; i < arr.length; i++) {
            arrSum += arr[i];
        }
        return arrSum;
    }
    function isStartZero(start) {
        if (start <= 0) {
            start = 0;
        }
        return start;
    }
    let speciaNum = specialArr[0];
    let power = specialArr[1];
    let index = 0;
    while (index < sequenceArr.length) {
        if (sequenceArr[index] === speciaNum) {
            let start = index - power;
            let end = power * 2 + 1;
            start = isStartZero(start);
            sequenceArr.splice(start, end);
            index = start;
        } else {
            index++;
        }
    }
    let sequenceArrSum = sumArr(sequenceArr);
    return sequenceArrSum;
}
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
));
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
));
console.log(bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
));
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
));