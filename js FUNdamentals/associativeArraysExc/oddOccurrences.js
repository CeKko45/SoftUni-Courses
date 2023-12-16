function oddOccurrences(arr) {
    let map = new Map();
    let wordsArr = arr.split(" ");
    for(let word of wordsArr) {
        let currentWord = word.toLowerCase();
        if(!map.has(currentWord)) {
            map.set(currentWord, + 1);
        } else {
            let currentQuantity = map.get(currentWord);
            let newQuantity = currentQuantity += 1;
            map.set(currentWord, newQuantity);
        }
    }
    let result = [];
    for(let [key, value] of map) {
        if(value % 2 === 1) {
            result.push(key);
        }
    }
    console.log(result.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');