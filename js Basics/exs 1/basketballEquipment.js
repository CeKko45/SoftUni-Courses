function basketballEquipment(input) {
    let training = Number(input[0]);
    let shoesPrice = training - (training * 0.40);
    let clothingPrice = shoesPrice - (shoesPrice * 0.20);
    let ballPrice = clothingPrice * 0.25;
    let accsessoriesPrice = ballPrice * 0.20;
    let combinedPrice = training + shoesPrice + clothingPrice + ballPrice + accsessoriesPrice;
    console.log(combinedPrice);
}
basketballEquipment(["365"])