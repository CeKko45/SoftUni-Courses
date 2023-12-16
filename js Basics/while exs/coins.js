function coins(input) {
    let change = Number(input[0]);
    let coinsChange = change * 100;
    let coinsCounter = 0;

    while (coinsChange > 0) {
        if (coinsChange >= 200) {
            coinsChange -= 200;
            coinsCounter++;
        } else if (coinsChange >= 100) {
            coinsChange -= 100;
            coinsCounter++;
        } else if (coinsChange >= 50) {
            coinsChange -= 50;
            coinsCounter++;
        } else if (coinsChange >= 20) {
            coinsChange -= 20;
            coinsCounter++;
        } else if (coinsChange >= 10) {
            coinsChange -= 10;
            coinsCounter++;
        } else if (coinsChange >= 5) {
            coinsChange -= 5;
            coinsCounter++;
        } else if (coinsChange >= 2) {
            coinsChange -= 2;
            coinsCounter++;
        } else if (coinsChange >= 1) {
            coinsChange -= 1;
            coinsCounter++;
        }
    }
    console.log(coinsCounter);
}
coins (["1.23"])