function minNumber(input) {
    let n = Number(input[0]);
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (n !== "Stop") {
        let num = Number(n);
        if (num < min) {
            min = num;
        }
        n = input[index];
        index++;
    }
    console.log(min);
}
minNumber (["100",
"99",
"80",
"70",
"Stop"])
