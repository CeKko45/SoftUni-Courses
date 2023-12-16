function sameNumbers(numbers) {
    let sumDigits = 0;
    let digitsArr = String(numbers).split("");
    let areSame = true;
    for(let digit of digitsArr) {
        sumDigits += Number(digit);
        if(digitsArr[0] !== digit) {
            areSame = false;
        }
    }
    console.log(areSame);
    console.log(sumDigits);
}
sameNumbers(2222222);
sameNumbers(1234 );