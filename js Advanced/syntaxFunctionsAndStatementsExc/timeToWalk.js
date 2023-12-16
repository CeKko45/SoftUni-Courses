function timeToWalk(steps, footPrintLength, studentSpeed) {
    let distanceInMeters = steps * footPrintLength;
    let speedMeterSec = studentSpeed * 1000 / 3600;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedMeterSec + rest;

    let timeHour = Math.floor(time / 3600)
    timeHour = timeHour.toFixed(0)
    timeHour = timeHour.padStart(2, "0");
    let timeMin = Math.floor(time / 60).toFixed(0).padStart(2, "0");
    let timeSec = Math.round(time % 60).toFixed(0).padStart(2, "0");

    console.log(`${timeHour}:${timeMin}:${timeSec}`);

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);