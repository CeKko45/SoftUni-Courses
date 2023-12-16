function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);

    let chickenPrice = chickenMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let veggiePrice = veggieMenu * 8.15;
    let combinedPrice = chickenPrice + fishPrice + veggiePrice;
    let dessertPrice = combinedPrice * 0.20;
    let orderPrice = combinedPrice + dessertPrice + 2.50;

    console.log(orderPrice);
}
foodDelivery(["2", "4", "3"])