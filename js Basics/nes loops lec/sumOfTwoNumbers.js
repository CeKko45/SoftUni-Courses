function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        for (let j = startNumber; j <= endNumber; j++) {
            sum = i + j;
            counter++;
            if (sum === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }
    if (sum !== magicNumber) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["23",
    "24",
    "20"])
