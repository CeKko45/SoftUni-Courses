function mathPower(num, power) {
    let raisedNum = 1;
    for (let i = 0; i < power; i++) {
        raisedNum *= num;
    }
    console.log(raisedNum);
}
mathPower(2, 8);
mathPower(3, 4);