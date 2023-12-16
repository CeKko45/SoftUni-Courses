function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    if (budget <= 100) {
        if (season === "summer") {
            budget = budget * 0.30;
            console.log("Somewhere in Bulgaria");
            console.log(`Camp - ${budget.toFixed(2)}`);
        } else if (season === "winter") {
            budget = budget * 0.70;
            console.log("Somewhere in Bulgaria");
            console.log(`Hotel - ${budget.toFixed(2)}`);
        }
    } else if (budget <= 1000) {
        if (season === "summer") {
            budget = budget * 0.40;
            console.log("Somewhere in Balkans");
            console.log(`Camp - ${budget.toFixed(2)}`);
        } else if (season === "winter") {
            budget = budget * 0.80;
            console.log("Somewhere in Balkans");
            console.log(`Hotel - ${budget.toFixed(2)}`);
        }
    } else {
            budget = budget * 0.90;
            console.log("Somewhere in Europe");
            console.log(`Hotel - ${budget.toFixed(2)}`);
        
    }
}
journey (["1500", "summer"])