function repainting(input) {
    let nylonQuantity = Number(input[0]);
    let paintQuantity = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylonQuantity + 2) * 1.50;
    let paintPrice = (paintQuantity + (paintQuantity * 0.10)) * 14.50;
    let thinnerPrice = thinner * 5.00;
    let materialsPrice = nylonPrice + paintPrice + thinnerPrice + 0.40;
    let workForcePrice = (materialsPrice * 0.30) * hours;
    let fullPrice = materialsPrice + workForcePrice;
    
    console.log(fullPrice);
}
repainting(["10", "11", "4", "8"])