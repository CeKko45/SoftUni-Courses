function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeFishTank = lenght * width * height;
    let volumeLiters = volumeFishTank * 0.001;
    let requiredLiters = volumeLiters * (1 - 0.17);

    console.log(requiredLiters);
}
fishTank(["85", "75", "47", "17"])