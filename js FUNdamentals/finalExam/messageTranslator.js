function messageTranslator(arr) {
    let pattern = /[!](?<command>[A-Z][a-z]{3,})[!][:][[](?<word>[A-Za-z]{8,})[\]]/;
    let finalMessage = [];
    let messageAmount = Number(arr.shift());
    for(let i = 0; i < messageAmount; i++) {
        if(pattern.test(arr[i])) {
            let currentMessage = pattern.exec(arr[i]);
            let startingWord = currentMessage.groups.command + ":";
            finalMessage.push(startingWord);
            let currentMessageArr = currentMessage.groups.word.split("").join("");
            for(let letter of currentMessageArr) {
                finalMessage.push(letter.charCodeAt(0));
            }
            console.log(`${finalMessage.join(" ")}`);

        } else {
            console.log("The message is invalid");
        }
    }
}
messageTranslator(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"]);
messageTranslator(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"]);