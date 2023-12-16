function vacationBookList(input) {
    let amountPages = Number(input[0]);
    let pages = Number(input[1]);
    let amountDays = Number(input[2]);

    let totalBookTime = amountPages / pages;
    let hoursPerDay = totalBookTime / amountDays;

    console.log(hoursPerDay);

}
vacationBookList(["212", "20", "2"])