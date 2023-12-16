function maxSequenceOfEqualElements(arr) {
    let newArr = [];
    let buffArr = [];
    let repetition = 0;
    let maxRepetition = 0;
    let currentNum
    for (let i = 0; i < arr.length; i++) {
        if (currentNum === arr[i]) {
            newArr.push(arr[i]);
            repetition++;
            if (repetition > maxRepetition) {
                buffArr = [];
                for (let i = 0; i < newArr.length; i++) {
                    buffArr.push(newArr[i]);
                }
                maxRepetition = repetition;
                currentNum = arr[i];
            }          
        } else {
            newArr = [];
            newArr.push(arr[i]);
            repetition = 0;
            currentNum = arr[i];           
        }
    }
    console.log(buffArr.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);