function shopping(input) {
    let budget = Number(input[0]);
    let video = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);
    let videoPrice = 250 * video;
    let processorPrice = (videoPrice * 0.35) * processor;
    let ramPrice = (videoPrice * 0.10) * ram;
    let totalPrice = videoPrice + processorPrice + ramPrice;
    let diff = 0;

    if(video > processor) {
        totalPrice = totalPrice * 0.85;
    }
    if(totalPrice <= budget) {
        diff = Math.abs(totalPrice - budget);
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        diff = totalPrice - budget;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }

}
shopping (["920.45",
"3",
"1",
"1"])



