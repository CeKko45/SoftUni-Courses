function fruit(fruitType, weigthInGrams, priceInKg) {
    let weigthInKg = weigthInGrams / 1000;
    let moneyNeeded = weigthInKg * priceInKg;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${fruitType}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);