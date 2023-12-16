function commonElements(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        let firstArrWord = firstArr[i];
        for (let j = 0; j < secondArr.length; j++) {
            let secondArrWord = secondArr[j];
            if (firstArrWord === secondArrWord) {
                console.log(firstArrWord);
                break;
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])