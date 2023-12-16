function cinema (input) {
    let type = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let income = 0;

    switch (type) {
        case "Premiere":
            income = rows * colums * 12;
            break;
        case "Normal":
            income = rows * colums * 7.50;
            break;
        case "Discount":
            income = rows * colums * 5;
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema (["Discount",
"12",
"30"])


