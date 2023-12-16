function substitution(k, l, m, n) {
    let counter = 0;
    for (let i = k; i <= 8; i++) {
        if (i % 2 === 0) {
            let firstDigitFN = i;
            for (let j = 9; j >= l; j--) {
                if (j % 2 === 1) {
                    let secondDigitFN = j;
                    for (let o = m; o <= 8; o++) {
                        if (o % 2 === 0) {
                            let firstDigitSN = o;
                            for (let p = 9; p >= n; p--) {
                                if (p % 2 === 1) {
                                    let secondDigitSN = p;
                                    if (firstDigitFN !== firstDigitSN || secondDigitFN !== secondDigitSN) {
                                        console.log(`${firstDigitFN}${secondDigitFN} - ${firstDigitSN}${secondDigitSN}`);
                                        counter++;
                                        if (counter >= 6) {
                                            return;
                                        }
                                    } else {
                                        console.log("Cannot change the same player.");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

substitution(7, 6, 8, 5);
substitution(6, 7, 5, 6);