function maxNumber(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    let topInt = 0;
    let topIntArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > topInt) {
            topInt = newArr[i];
            topIntArr.push(topInt);
        }
    }
    topIntArr = topIntArr.reverse();
    console.log(topIntArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);