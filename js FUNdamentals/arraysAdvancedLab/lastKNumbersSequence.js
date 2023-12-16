function lastKNumbersSequence(n, k) {
    let arr = [1];
    let sum = 0;
    let IsBigger = false;
    for (let i = 0; i < n - 1; i++) {
        let newArr = arr.slice(-k);
        let sumCurrentElement = 0;
        for (let j = newArr.length - 1; j >= 0 ; j--){
            let currentElement = newArr[j];
            sumCurrentElement += currentElement
        }
        arr.push(sumCurrentElement);
    }
    return arr.join(" ");
}
console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));