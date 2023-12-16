function wordsTracker(arr) {
    let result = {};
    let searchedWordArr = arr.shift().split(" ");
    for (let word of searchedWordArr) {
        result[word] = 0;
    }
    for (let word of arr) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        }
    }
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);