function treasureHunt(input) {
    let state = input.shift().split("|");
    let command = input.shift();
    while (command !== "Yohoho!") {
        let tokens = command.split(" ");
        let action = tokens.shift();
        switch (action) {
            case "Loot":
                loot(tokens, state);
                break;
            case "Drop":
                drop(tokens, state);
                break;
            case "Steal":
                steal(tokens, state);
                break;
        }
        command = input.shift();
    }
    if (state.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        for (const el of state) {
            sum += el.length;
        }
        let avg = sum / state.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }

    function loot(arr, state) {
        for (let el of arr) {
            if (state.includes(el)) {
                continue;
            }
            state.unshift(el);
        }
    }

    function drop(tokens, state) {
        let index = Number(tokens[0]);
        if (index < 0 || index > state.length - 1) {
            return;
        }
        let el = state.splice(index, 1);
        state.push(el[0]);
    }

    function steal(tokens, state) {
        let count = Number(tokens[0]);
        let elements = state.splice(-count);
        console.log(elements.join(", "));
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]) ;
    treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);
    
