function lastKNumbersSequence(n, k) {
    let arr = [1];
    for(let i = 1; i < n; i++) {
        let buffArr = arr.slice(-k);
        let sumCurrentNum = 0;
        for(let j = buffArr.length - 1; j >= 0; j--) {
            let currentNum = buffArr[j];
            sumCurrentNum += currentNum;
        }
        arr.push(sumCurrentNum);
    }
    return arr;
}
console.log(lastKNumbersSequence(6, 3 ));
console.log(lastKNumbersSequence(8, 2 ));