function wordOccurrences(arr) {
let map = new Map();
for(let word of arr) {
    if(!map.has(word)) {
        map.set(word, + 1)
    } else {
        let currentReps = map.get(word);
        map.set(word, currentReps + 1);
    }
}
let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
for(let key of sorted) {
    console.log(`${key[0]} -> ${key[1]} times`);
}
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);