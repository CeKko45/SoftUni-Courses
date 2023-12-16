function equalSums(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) {
            console.log(i);
            return;
        }
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }
        for (let k = arr.length - 1; k > i; k--) {
            rightSum += arr[k];
        }
        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }
    console.log("no");
}
equalSums([1,4,3,2]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);