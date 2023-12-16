function skiTrip(input) {
let days = Number(input[0]);
let room = input[1];
let feedback = input[2];
let nights = days - 1;
let finalPrice = 0;

switch (room) {
    case "room for one person":
        if (feedback === "positive") {
            finalPrice = (nights * 18) * 1.25;
            console.log(`${finalPrice.toFixed(2)}`);
        } else if (feedback === "negative") {
            finalPrice = (nights * 18) * 0.90
            console.log(`${finalPrice.toFixed(2)}`);
        }
        break;
    case "apartment":
        if (nights < 10) {
            finalPrice = ((nights * 25) * 0.70);
            if (feedback === "positive") {
                finalPrice = finalPrice * 1.25;
                console.log(`${finalPrice.toFixed(2)}`);
            } else if (feedback === "negative") {
                finalPrice = finalPrice * 0.90;
                console.log(`${finalPrice.toFixed(2)}`);
            }
        } else if (nights >= 10 && nights < 15) {
            finalPrice = ((nights * 25) * 0.65);
            if (feedback === "positive") {
                finalPrice = finalPrice * 1.25;
                console.log(`${finalPrice.toFixed(2)}`);
            } else if (feedback === "negative") {
                finalPrice = finalPrice * 0.90;
                console.log(`${finalPrice.toFixed(2)}`);
            } 
        } else if (nights > 15) {
            finalPrice = ((nights * 25) * 0.50);
            if (feedback === "positive") {
                finalPrice = finalPrice * 1.25;
                console.log(`${finalPrice.toFixed(2)}`);
            } else if (feedback === "negative") {
                finalPrice = finalPrice * 0.90;
                console.log(`${finalPrice.toFixed(2)}`);
            }
        }
        break;
    case "president apartment":
        if (nights < 10) {
            finalPrice = ((nights * 35) * 0.90);
            if (feedback === "positive") {
                finalPrice = finalPrice * 1.25;
                console.log(`${finalPrice.toFixed(2)}`);
            } else if (feedback === "negative") {
                finalPrice = finalPrice * 0.90;
                console.log(`${finalPrice.toFixed(2)}`);
            }
        } else if (nights >= 10 && nights < 15) {
            finalPrice = ((nights * 35) * 0.85);
            if (feedback === "positive") {
                finalPrice = finalPrice * 1.25;
                console.log(`${finalPrice.toFixed(2)}`);
            } else if (feedback === "negative") {
                finalPrice = finalPrice * 0.90;
                console.log(`${finalPrice.toFixed(2)}`);
            } 
        } else if (nights > 15) {
            finalPrice = ((nights * 35) * 0.80);
            if (feedback === "positive") {
                finalPrice = finalPrice * 1.25;
                console.log(`${finalPrice.toFixed(2)}`);
            } else if (feedback === "negative") {
                finalPrice = finalPrice * 0.90;
                console.log(`${finalPrice.toFixed(2)}`);
            }
        }
        break;
}
}
skiTrip (["12",
"room for one person",
"positive"])



