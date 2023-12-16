function petshop(input){
    let dogFood = input[0] * 2.50;
    let catFood = input[1] * 4;
    let finalPrice = dogFood + catFood;
    console.log(finalPrice);
}
petshop(["5", "4"])