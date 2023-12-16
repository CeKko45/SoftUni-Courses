function sumFirstLast(arr) {
    let firstNum = Number(arr[0]);
    let lastNum = Number(arr[arr.length - 1]);
    let result = firstNum + lastNum;
    return result;
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10'] ));