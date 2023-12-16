function multiplyTable(input) {
    let n = Number(input[0]);
    let nString = n.toString();
    let nStringSplit = nString.split("");
    let firstDigit = nStringSplit[2];
    let secondDigit = nStringSplit[1];
    let thirdDigit = nStringSplit[0];
    if (firstDigit <= 0 || secondDigit <= 0 || thirdDigit <= 0) {

    } else {
        for (let i = 1; i <= firstDigit; i++) {
            for (let j = 1; j <= secondDigit; j++) {
                for (let k = 1; k <= thirdDigit; k++) {
                    let sum = k * j * i;
                    console.log(`${i} * ${j} * ${k} = ${sum};`);
                }
            }
        }
    }
}
multiplyTable(["304"])