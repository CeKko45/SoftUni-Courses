function godzillavsKong(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decorPrice = budget * 0.10;
    let clothes = statists * clothesPrice; 
    
    if(statists > 150) {
        clothes = clothes * 0.90;
    }

    let fullPrice = decorPrice + clothes;
    let remaining = budget - fullPrice;
    let diff = 0;

    if(decorPrice + clothes > budget) {
        diff = fullPrice - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else if (decorPrice + clothes <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${remaining.toFixed(2)} leva left.`)
    }

}
godzillavsKong (["20000",
"120",
"55.5"])


