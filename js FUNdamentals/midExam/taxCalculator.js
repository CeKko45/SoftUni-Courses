function taxCalculator(line) {
    let vehicles = line[0].split(">>");
    let totalTax = 0;
    while(vehicles.length !== 0) {
        let vehicle = vehicles.shift().split(" ");
        let type = vehicle[0];
        let years = Number(vehicle[1]);
        let kilometer = Number(vehicle[2]);
        let tax = 0; 
        switch (type) {
            case "family":
                tax = (Math.trunc(kilometer / 3000)* 12 + (50 - years * 5));
                break;
            case "heavyDuty":
                tax = (Math.trunc(kilometer / 9000)* 14 + (80 - years * 8));
                break;
            case "sports":
                tax = (Math.trunc(kilometer / 2000)* 18 + (100 - years * 9));
                break;
                default:
                    console.log("Invalid car type.");
                    continue;
        }
        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
        totalTax += tax;
    }
    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);