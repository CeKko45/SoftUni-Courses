function theatrePromotions(typeOfDay, age) {
    let price = 0;
    switch (typeOfDay) {
        case "Weekday":
            if (age < 0 || age > 122) {
                console.log("Error!");
            } else if (age <= 18) {
                price = 12;
                console.log(`${price}$`);
            } else if (age <= 64) {
                price = 18;
                console.log(`${price}$`);
            } else if (age <= 122) {
                price = 12;
                console.log(`${price}$`);
            }
            break;
        case "Weekend":
            if (age < 0 || age > 122) {
                console.log("Error!");
            } else if (age <= 18) {
                price = 15;
                console.log(`${price}$`);
            } else if (age <= 64) {
                price = 20;
                console.log(`${price}$`);
            } else if (age <= 122) {
                price = 15;
                console.log(`${price}$`);
            }
            break;
        case "Holiday":
            if (age < 0 || age > 122) {
                console.log("Error!");
            } else if (age <= 18) {
                price = 5;
                console.log(`${price}$`);
            } else if (age <= 64) {
                price = 12;
                console.log(`${price}$`);
            } else if (age <= 122) {
                price = 10;
                console.log(`${price}$`);
            }
            break;
        default:
            console.log("Error!");
            break;
    }
}
theatrePromotions('Weekday', 42)
theatrePromotions('holiday', 12)
theatrePromotions('Holiday', 15)