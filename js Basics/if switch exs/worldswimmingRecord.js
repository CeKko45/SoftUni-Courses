function worldswimmingRecord(input) {
    let record = Number(input[0]);
    let lenghtM = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let totalLenght = lenghtM * timeForMeter;
    let waterSlow = Math.floor(lenghtM / 15);
    let totalTime = totalLenght + (waterSlow * 12.5);
    let diff = totalTime - record;

    if(record > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
worldswimmingRecord (["55555.67",
"3017",
"5.03"])

