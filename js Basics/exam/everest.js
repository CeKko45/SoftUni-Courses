function everest(input) {
    let index = 0;
    let days = 1;
    let altitude = 5364;
    while (index <= input.length) {
        let condition = input[index];
        index++;
        let climbForToday = 0;
        if (condition === "Yes") {
            days++;
            if (days > 5) {
                break;
            }
            climbForToday = Number(input[index]);
            altitude += climbForToday;
            index++;
        } else if (condition === "No") {
            climbForToday = Number(input[index]);
            altitude +=climbForToday;
            index++;
        } else if (condition === "END") {
            break;
        }
        if (altitude >=8848) {
            console.log(`Goal reached for ${days} days!`);
            break;
        } 
    }
    if (altitude < 8848) {
        console.log(`Failed!`);
        console.log(`${altitude}`);
    }
}
everest(["Yes",
    "1000",
    "Yes",
    "945",
    "No",
    "1200",
    "END"
    ])