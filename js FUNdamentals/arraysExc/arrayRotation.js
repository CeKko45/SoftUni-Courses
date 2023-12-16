function arrayRotation(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let newArr = [];
        let firstValue = arr[0];
        for (let j = 1; j < arr.length; j++) {
            newArr.push(arr[j]);
        }
        newArr.push(firstValue);
        arr = newArr;
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);