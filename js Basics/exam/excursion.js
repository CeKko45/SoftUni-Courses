function excursion(input) {
    let numberOfPeople = Number(input[0]);
    let nigths = Number(input[1]);
    let transportCards = Number(input[2]);
    let tickets = Number(input[3]);

    let singlePersonPrice = nigths * 20;
    let transportCardsPrice = transportCards * 1.60;
    let ticketsPrice = tickets * 6;
    let totalPersonPrice = singlePersonPrice + transportCardsPrice + ticketsPrice;
    let groupPrice = totalPersonPrice * numberOfPeople;
    let finalGroupPrice = groupPrice + (groupPrice * 0.25);
    console.log(finalGroupPrice.toFixed(2));
}
excursion(["131",
    "9",
    "33",
    "46"])