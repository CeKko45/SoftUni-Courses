function searchForANumber(firstArr, secondArr) {
    let elementCount = secondArr[0];
    let deleteElementCount = secondArr[1];
    let searchedElement = secondArr[2];
    let searchedElementCount = 0;
    firstArr.splice(elementCount);
    firstArr.splice(0, deleteElementCount);
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] === searchedElement) {
            searchedElementCount++;
        }
    }
    return console.log(`Number ${searchedElement} occurs ${searchedElementCount} times.`);
}
// searchForANumber([5, 2, 3, 4, 1, 6],
//     [5, 2, 3]
// );
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
);