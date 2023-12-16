function sumOfNumbersNAndM(n, m) {
    let result = 0;
    let num1 = Number(n);
    let num2 = Number(m);
    for(let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}
sumOfNumbersNAndM('1', '5' );
sumOfNumbersNAndM('-8', '20');