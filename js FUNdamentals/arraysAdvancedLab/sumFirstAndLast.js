function sumFirstAndLast(arr) {
    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length -1]);
    let result = firstElement + lastElement;
    return result;

}
console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));