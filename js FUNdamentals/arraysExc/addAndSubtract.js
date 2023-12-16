function addAndSubtract(arr) {
    let originalSum = 0;
    let modedSum = 0;
    for (let i = 0; i < arr.length; i++) {
        originalSum += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        modedSum += arr[i]
    }
    console.log(arr);
    console.log(originalSum);
    console.log(modedSum);
}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])