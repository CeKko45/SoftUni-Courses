function traveling(input) {
    let index = 0;
    let destination = "";
    let sparedMoney = 0;

    while (input[index] !== "End") {
        destination = input[index];
        index++;
        let requiredMoney = Number(input[index]);
        sparedMoney = 0;
        index++;
        while (Number(input[index] !== NaN)) {
            
            sparedMoney += Number(input[index]);
            index++;
            if (sparedMoney >= requiredMoney) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
    }
}
traveling (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
