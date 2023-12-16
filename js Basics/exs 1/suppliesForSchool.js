function suppliesForSchool(input) {
    let amountPens = Number(input[0]);
    let amountMarkers = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = amountPens * 5.80;
    let markersPrice = amountMarkers * 7.20;
    let detergentPrice = litersDetergent * 1.20;
    let fullPrice = pensPrice + markersPrice + detergentPrice;
    let discountPrice = fullPrice - (fullPrice * 0.25);

    console.log(discountPrice);
}
suppliesForSchool(["2", "3", "4", "25"])