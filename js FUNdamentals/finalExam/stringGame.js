function stringGame(arr) {
    let givenString = arr.shift();
    for (let line of arr) {
        if (line === "Done") {
            break;
        }
        let currentLine = line.split(" ");
        let command = currentLine[0];
        switch (command) {
            case "Change":
                let old = currentLine[1];
                let newLetters = currentLine[2];
                while (givenString.includes(old)) {
                    givenString = givenString.replace(old, newLetters);
                }
                console.log(givenString);
                break;
            case "Includes":
                let givenInclusion = currentLine[1];
                if (givenString.includes(givenInclusion)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "End":
                let givenEnding = currentLine[1];
                if (givenString.endsWith(givenEnding)) {
                    console.log("True");
                } else {
                    console.log("False");
                }
                break;
            case "Uppercase":
                givenString = givenString.toUpperCase();
                console.log(givenString);
                break;
            case "FindIndex":
                let givenChar = currentLine[1];
                let givenCharIndex = givenString.indexOf(givenChar);
                console.log(givenCharIndex);
                break;
            case "Cut":
                let startIndex = Number(currentLine[1]);
                let endIndex = startIndex + Number(currentLine[2]);
                console.log(givenString.substring(startIndex, endIndex));
                break;
        }
    }
}
stringGame((["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])
);
stringGame((["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])
);