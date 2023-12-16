function bonusScore(input) {
    let basePoints = Number(input[0]);
    let bonus = 0;

    if (basePoints <= 100) {
        bonus = 5;
    } else if (basePoints > 1000) {
        bonus = basePoints * 0.10;
    } else if (basePoints > 100) {
        bonus = basePoints * 0.20;
    } 
    if (basePoints % 2 == 0) {
        bonus += 1;
    } else if (basePoints % 10 == 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(basePoints + bonus);
}
bonusScore (["2703"])