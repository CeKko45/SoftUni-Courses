function perfectNumber (num) {
    let buffNum = 1;
    let buffSum = 0;
    while (buffSum <= num) {
        if (buffSum === num) {
            return console.log("We have a perfect number!");
        }
        buffSum += buffNum;
        buffNum++;
    }
    if (buffSum > num) {
        return console.log("It's not so perfect.");
    }
}
perfectNumber(6);
perfectNumber (28);
perfectNumber (1236498);