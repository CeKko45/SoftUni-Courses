function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let rent = 0;

    switch (season) {
        case "Spring": rent = 3000; break;
        case "Summer":
        case "Autumn": rent = 4200; break;
        case "Winter": rent = 2600; break;
    }
    if (fishermen <= 6) {
        rent = rent * 0.90;
    } else if (fishermen <= 11) {
        rent = rent * 0.85;
    } else if (fishermen >= 12) {
        rent = rent * 0.75;
    }
    if (fishermen % 2 === 0 && season !== "Autumn") {
        rent = rent * 0.95;
    }
    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    }

}
fishingBoat(["3600",
    "Autumn",
    "6"])

