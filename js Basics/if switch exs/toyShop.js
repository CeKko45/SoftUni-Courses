function toyShop(input) {
    let price = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let teddy = Number(input[3]);
    let minnion = Number(input[4]);
    let truck = Number(input[5]);

    let toyCount = puzzle + doll + teddy + minnion + truck;
    let money = puzzle * 2.60 + doll * 3.00 + teddy * 4.10 + minnion * 8.20 + truck * 2.00;
   
    if (toyCount >=50) {
        money = money * 0.75;
    }

    money = money * 0.90;

    if (money >= price) {
        let diff = money - price;
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        let diff = price - money;
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
     
}
toyShop (["320", "8", "2", "5", "5", "1"])

