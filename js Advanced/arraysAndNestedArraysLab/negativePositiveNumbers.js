function negativePositiveNumbers(arr) {
    let resultArr = []
    for(let currentNum of arr) {
        if(currentNum >= 0) {
            resultArr.push(currentNum);
        } else {
            resultArr.unshift(currentNum);
        }
    }
    console.log(resultArr.join("\n"));
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);