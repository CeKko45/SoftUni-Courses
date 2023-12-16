function vacation(groupOfPeople, typeOfGroup, dayOfTheWeek) {
    price = 0;
    switch (typeOfGroup) {
        case "Students":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = 8.45 * groupOfPeople;
                    break;
                case "Saturday":
                    price = 9.80 * groupOfPeople;
                    break;
                case "Sunday":
                    price = 10.46 * groupOfPeople;
                    break;
            }
            if (groupOfPeople >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = 10.90 * groupOfPeople;
                    if (groupOfPeople >= 100) {
                        price -= 10 * 10.9;
                    }
                    break;
                case "Saturday":
                    price = 15.60 * groupOfPeople;
                    if (groupOfPeople >= 100) {
                        price -= 10 * 15.6;
                    }
                    break;
                case "Sunday":
                    price = 16 * groupOfPeople;
                    if (groupOfPeople >= 100) {
                        price -= 10 * 16;
                    }
                    break;
            }

            break;
        case "Regular":
            switch (dayOfTheWeek) {
                case "Friday":
                    price = 15 * groupOfPeople;
                    break;
                case "Saturday":
                    price = 20 * groupOfPeople;
                    break;
                case "Sunday":
                    price = 22.50 * groupOfPeople;
                    break;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                price *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");