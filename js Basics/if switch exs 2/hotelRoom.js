function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartment = 0;
    let studio = 0;

    switch (month) {
        case "May":
        case "October":
            studio = nights * 50;
            apartment = nights * 65;
            if (nights > 7 && nights < 14) {
                studio = studio * 0.95;
                console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
                console.log(`Studio: ${studio.toFixed(2)} lv.`);
            } 
            else if (nights > 14) {
                studio = studio * 0.70;
                apartment = apartment * 0.90;
                console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
                console.log(`Studio: ${studio.toFixed(2)} lv.`);
            }
            break;
        case "June":
        case "September":
            studio = nights * 75.20;
            apartment = nights * 68.70;
            if (nights > 14) {
                studio = studio * 0.80;
                apartment = apartment * 0.90;
                console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
                console.log(`Studio: ${studio.toFixed(2)} lv.`);
            } else {
                console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
                console.log(`Studio: ${studio.toFixed(2)} lv.`);
            }
            break;
        case "July":
        case "August":
            studio = nights * 76;
            apartment = nights * 77;
            if (nights > 14) {
                apartment = apartment * 0.90;
                console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
                console.log(`Studio: ${studio.toFixed(2)} lv.`);
            } else {
                console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
                console.log(`Studio: ${studio.toFixed(2)} lv.`);
            }
            break;
    }
}
hotelRoom(["May",
"15"])



