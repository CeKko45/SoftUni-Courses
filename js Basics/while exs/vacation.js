function vacation(input) {
    let tripMoney = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let spendDays = 0;
    let days = 0;

    while (index < input.length) {
       if (input[index] === "spend") {
        index++;
        let expenses = Number(input[index]);
        money -= expenses;
        spendDays++;
        if (money < 0) {
            money = 0;
        }
       } else if (input[index] === "save") {
        index++;
        let saves = Number(input[index]);
        money += saves;
        spendDays = 0;
       }
       index++;
       days++;
       if (spendDays >= 5) {
        break;
       }
    }
    if (money >= tripMoney) {
        console.log(`You saved the money for ${days} days.`);
    } else if (money < tripMoney) {
        console.log("You can't save the money.");
        console.log(days);
    }
}
vacation (["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


