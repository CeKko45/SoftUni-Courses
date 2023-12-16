function onTimeForTheExam(input) {
    let testHour = Number(input[0]);
    let testMinute = Number(input[1]);
    let arrivalhour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let test = (testHour * 60) + testMinute;
    let arrival = (arrivalhour * 60) + arrivalMinute;
    let diff = Math.abs(test - arrival);

    if (test < arrival) {
        console.log("Late");
        if (diff >= 60) {
            let hour = diff / 60;
            let minutes = diff % 60;
            if (minutes < 10) {
                console.log(`${Math.floor(hour)}:0${minutes} hours after the start`);
            } else {
                console.log(`${Math.floor(hour)}:${minutes} hours after the start`);
            }
        } else {
            if(diff < 10){
                console.log(`0${diff} minutes after the start`);
            } else {
                console.log(`${diff} minutes after the start`);
            }
        }
    } else if (arrival === test || (diff <= 30)) {
        console.log("On time");
        if (diff >= 1 && diff <= 30) {
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (diff >= 60) {
            let hour = diff / 60;
            let minutes = diff % 60;
            if (minutes < 10) {
                console.log(`${Math.floor(hour)}:0${minutes} hours before the start`);
            } else {
                console.log(`${Math.floor(hour)}:${minutes} hours before the start`);
            }
        } else {
            if (diff < 10) {
                console.log(`0${diff} minutes before the start`);
            } else {
                console.log(`${diff} minutes before the start`);
            }
        }
    }
}
onTimeForTheExam(["9",
"00",
"10",
"30"])



