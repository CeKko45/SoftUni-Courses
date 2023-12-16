function maxNumber(input) {
    let n = Number(input[0]);
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (n !== "Stop") {
        let num = Number(n);
        if (num > max) {
            max = num;
        }
        n = input[index];
        index++;
    }
    console.log(max);

}
maxNumber (["100",
"99",
"80",
"70",
"Stop"])
