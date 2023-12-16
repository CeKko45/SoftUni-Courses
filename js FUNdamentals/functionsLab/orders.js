function orders(product, quantity) {
    let finalPrice = 0;
    switch(product) {
        case "coffee":
            finalPrice = 1.5;
            break;
        case "water":
            finalPrice = 1;
            break;
        case "coke":
            finalPrice = 1.4;
            break;
        case "snacks":
            finalPrice = 2;
            break;
    }
    finalPrice *= quantity;
    console.log(finalPrice.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);