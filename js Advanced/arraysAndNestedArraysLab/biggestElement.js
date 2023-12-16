function biggestElement(matrix) {
    let result = Number.MIN_SAFE_INTEGER;
    for(let currentArr of matrix) {
        let sortedArr = currentArr.sort((a,b) => b-a);
        if(sortedArr[0] > result) {
            result = sortedArr[0];
        }
    }
    return result;
}
console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]
));
console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));