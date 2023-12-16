function yardGreening(input){
    let sqrmeters = input[0];
    let greeningPrice = sqrmeters * 7.61;
    let discount = 0.18 * greeningPrice;
    let finalPrice = greeningPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.
    The discount is: ${discount} lv.`);
}
yardGreening(["550"])