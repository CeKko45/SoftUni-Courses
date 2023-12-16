function muOnline(line) {
    let health = 100;
    let bitcoins = 0;
    let dungeon = line.split("|");
    for (let i = 0; i < dungeon.length; i++) {
        let room = dungeon[i];
        let tokens = room.split(" ");
        let command = tokens[0];
        let value = Number(tokens[1]);
        switch (command) {
            case "potion":
                let missingHealth = 100 - health;
                let restoredHealth = Math.min(missingHealth, value);
                health += restoredHealth;
                console.log(`You healed for ${restoredHealth} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
                console.log(`You slayed ${command}.`);
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
console.log("--------------");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");