function roadRadar(speed, area) {
    let limit = 0;
    let limitsDictionary = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    limit = limitsDictionary[area];
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    }
    let status = "";
    speed = speed - limit;
    if (speed <= 20) {
        status = "speeding";
    } else if (speed <= 40) {
        status = "excessive speeding";
    } else if (speed > 40) {
        status = "reckless driving"
    }
    console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - ${status}`);
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');