function maidenParty(input) {
    let party = Number(input[0]);
    let loveLetters = Number(input[1]);
    let roses = Number(input[2]);
    let keychains = Number(input[3]);
    let carycatures = Number(input[4]);
    let luckSurprises = Number(input[5]);

    let sum = loveLetters * 0.60 + roses * 7.20 + keychains * 3.60 + carycatures * 18.20 + luckSurprises * 22;
    let numberOfGifts = loveLetters + roses + keychains + carycatures + luckSurprises;
    if (numberOfGifts >= 25) {
        sum = sum - (sum * 0.35);
    }
    let hostingPrice = sum * 0.10;
    let income = sum - hostingPrice;
    if (income >= party) {
        console.log(`Yes! ${(income - party).toFixed(2)} lv left.`);
    } else if (income < party) {
        console.log(`Not enough money! ${(party - income).toFixed(2)} lv needed.`);
    }

}
maidenParty (['320',
    '8',
    '2',
    '5',
    '5',
    '1'
    ])