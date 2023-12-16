function cinemaTickets(input) {
    index = 0;
    let command = input[index]
    let standardCounter = 0;
    let studentCounter = 0;
    let kidCounter = 0;
    let totalCounter = 0;

    while (input[index] !== "Finish") {
        let movie = input[index];
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let roomCounter = 0;
        while (input[index] !== "End" && input[index] !== "Finish") {
            if (roomCounter >= freeSeats) {
                break;
            }
            roomCounter++;
            switch (input[index]) {
                case "standard":
                    standardCounter++;
                    break;
                case "student":
                    studentCounter++;
                    break;
                case "kid":
                    kidCounter++;
                    break;
            }
            index++;
        }
        totalCounter += roomCounter;
        let result = roomCounter / freeSeats * 100;
        console.log(`${movie} - ${result.toFixed(2)}% full.`);
        if (input[index] === "Finish" || roomCounter >= freeSeats) {
            continue;
        } else {
            index++;
        }

    }
    console.log(`Total tickets: ${totalCounter}`);
    console.log(`${(studentCounter / totalCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter / totalCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalCounter * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"])