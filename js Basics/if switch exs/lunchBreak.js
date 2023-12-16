function lunchBreak(input) {
    let show = input[0];
    let episode = Number(input[1]);
    let lunchBreak = Number(input[2]);

    let lunchTime = lunchBreak / 8;
    let lunchRest = lunchBreak / 4;
    let remainingTime = lunchBreak - lunchTime - lunchRest;
    let diff = 0;

    if(remainingTime >= episode){
        diff = remainingTime - episode;
        console.log(`You have enough time to watch ${show} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
        diff = Math.abs(remainingTime - episode);
        console.log(`You don't have enough time to watch ${show}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak (["Teen Wolf",
"48",
"60"])

