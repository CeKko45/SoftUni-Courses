function biggerHalf(arr) {
    arr.sort((a,b) => a - b);
    let midPoint = Math.floor(arr.length / 2);
    let result = arr.slice(midPoint);
    return result; 
}
console.log(biggerHalf([4, 7, 2, 5] ));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6] ));