function dictionary(arr) {
    let notebook = new Map();
    let wordsAndDefinitions = arr.shift().split(" | ");
    for (let text of wordsAndDefinitions) {
        let currentWordAndDefinition = text.split(": ");
        let currentWord = currentWordAndDefinition[0];
        if (!notebook.has(currentWord)) {
            let currentDefinition = currentWordAndDefinition[1];
            notebook.set(currentWord, new Set());
            notebook.get(currentWord).add(currentDefinition);
        } else {
            let currentDefinition = currentWordAndDefinition[1];
            notebook.get(currentWord).add(currentDefinition);
        }
    }
    let teacherTest = arr.shift().split(" | ");
    let command = arr.shift();
    switch (command) {
        case "Test":
            for (let currentWord of teacherTest) {
                if (notebook.has(currentWord)) {
                    let answer = notebook.get(currentWord);
                    console.log(`${currentWord}:`);
                    for (let text of answer) {
                        console.log(`-${text}`);
                    }
                }
            }
            break;
        case "Hand Over":
            let answer = notebook.keys();
            let buffArr = [];
            for (let currentWord of answer) {
                buffArr.push(currentWord);
            }
            console.log(buffArr.join(" "));
            break;
    }
}
dictionary((["programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"])
);
dictionary((["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"])
);
dictionary((["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"])
);