function theHuntingGames(input) {
    let numberOfDays = Number(input.shift());
    let numberOfPlayers = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerDay = Number(input.shift());
    let foodPerDay = Number(input.shift());
    let totalWater = waterPerDay * numberOfDays * numberOfPlayers;
    let totalFood = foodPerDay * numberOfDays * numberOfPlayers;

    for (let i = 1; i <= numberOfDays; i++) {
        let energyAmount = Number(input.shift());
        groupEnergy -= energyAmount;
        if (groupEnergy - 0 < 1e-3) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }
        if (i % 2 === 0) {
            groupEnergy *= 1.05;
            totalWater *= 0.7;
        }
        if (i % 3 === 0) {
            groupEnergy *= 1.1;
            totalFood = totalFood - (totalFood / numberOfPlayers);
        }
    }
    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
}
theHuntingGames((["10",
"7",
"5035.5",
"11.3",
"7.2",
"942.3",
"500.57",
"520.68",
"540.87",
"505.99",
"630.3",
"784.20",
"321.21",
"456.8",
"330"])
);
// theHuntingGames((["12",
// "6",
// "4430",
// "9.8",
// "5.5",
// "620.3",
// "840.2",
// "960.1",
// "220",
// "340",
// "674",
// "365",
// "345.5",
// "212",
// "412.12",
// "258",
// "496"])
// );