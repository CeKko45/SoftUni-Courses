function cleverLily(input) {

    let age = Number(input[0]);
    let priceMachine = Number(input[1]);
    let priceToy = Number(input[2]);

    let toysCount = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= age; currentAge++) {
        if (currentAge % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else {
            toysCount++;
        }
    }
    let totalMoneyToys = priceToy * toysCount;
    let totalSavedMoney = savedMoney + totalMoneyToys - stolenMoney;

    if (totalSavedMoney >= priceMachine) {
        console.log(`Yes! ${(totalSavedMoney - priceMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceMachine - totalSavedMoney).toFixed(2)}`);
    }
}
cleverLily(["10",
    "170.00",
    "6"])
