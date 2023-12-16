function oscars(input) {
    let name = input[0];
    let points = Number(input[1]);
    let finalPoints = points;
    for (let i = 3; i < input.length; i += 2) {
        let currentName = input[i];
        let givenPoints = Number(input[i + 1]);
        let finalJuryPoints = (currentName.length * givenPoints) / 2;

        finalPoints += finalJuryPoints;

        if (finalPoints >= 1250.5) {
            console.log((`Congratulations, ${name} got a nominee for leading role with ${finalPoints.toFixed(1)}!`));
            break;
        }
    }
    if (finalPoints < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - finalPoints).toFixed(1)} more!`);
    }
}
oscars (["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
