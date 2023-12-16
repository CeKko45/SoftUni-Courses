function histogram(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= n; i++) {
        let currentN = Number(input[i]);
        if (currentN < 200) {
            p1++;
        } else if (currentN <= 399) {
            p2++;
        } else if (currentN <= 599) {
            p3++;
        } else if (currentN <= 799) {
            p4++;
        } else if (currentN >= 800) {
            p5++;
        }
    }
    console.log(`${((p1 / n) * 100).toFixed(2)}%`);
    console.log(`${((p2 / n) * 100).toFixed(2)}%`);
    console.log(`${((p3 / n) * 100).toFixed(2)}%`);
    console.log(`${((p4 / n) * 100).toFixed(2)}%`);
    console.log(`${((p5 / n) * 100).toFixed(2)}%`);
}
histogram(["3",
"1",
"2",
"999"])
