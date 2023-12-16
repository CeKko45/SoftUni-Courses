function excursionCalculator(input) {
    let numberOfPeople = Number(input[0]);
    let season = input[1];
    let price = 0;
    let totalPrice = 0;
    let discount = 0;

    if (numberOfPeople > 5) {
        switch (season) {
            case "spring":
                price = 48;
                totalPrice = numberOfPeople * price;
                break;
            case "summer":
                price = 45;
                totalPrice = numberOfPeople * price;
                discount = totalPrice * 0.15;
                totalPrice = totalPrice - discount;
                break;
            case "autumn":
                price = 49.50;
                totalPrice = numberOfPeople * price;
                break;
            case "winter":
                price = 85;
                totalPrice = numberOfPeople * price;
                discount = totalPrice * 0.08;
                totalPrice = totalPrice + discount;
                break;
        }
    } else if (numberOfPeople <= 5) {
        switch (season) {
            case "spring":
                price = 50;
                totalPrice = numberOfPeople * price;
                break;
            case "summer":
                price = 48.50;
                totalPrice = numberOfPeople * price;
                discount = totalPrice * 0.15;
                totalPrice = totalPrice - discount;
                break;
            case "autumn":
                price = 60;
                totalPrice = numberOfPeople * price;
                break;
            case "winter":
                price = 86;
                totalPrice = numberOfPeople * price;
                discount = totalPrice * 0.08;
                totalPrice = totalPrice + discount;
                break;
        }

    }
    console.log(`${totalPrice.toFixed(2)} leva.`);
}
excursionCalculator(["20",
    "winter"
])