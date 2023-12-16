function smallestTwoNumbers(arr) {
    let sortedInAscending = arr.sort((a, b) => a - b);
    let firstTwoAscending = sortedInAscending.slice(0,2);
    return firstTwoAscending.join(" ");
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));