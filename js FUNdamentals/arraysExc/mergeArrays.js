function mergeArrays(firstArr, secondArr) {
    let newArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        let firstArrValue = firstArr[i];
        let secondArrValue = secondArr[i];
        if (i % 2 === 0) {
            firstArrValue = Number(firstArrValue);
            secondArrValue = Number(secondArrValue);
        }
        let newArrValue = firstArrValue + secondArrValue;
        newArr.push(newArrValue);
    }
    console.log(newArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);