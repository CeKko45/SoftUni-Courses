function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let result = [];
    let objects = JSON.parse(input);
    for( const obj of objects) {
        let areaValue = area.call(obj);
        let volumeValue = vol.call(obj);
        result.push({area: areaValue, volume: volumeValue})
    }
    return result;
}

let a = solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)
console.log(a);

let b = solve(area, vol, `[
        {"x":"10","y":"-22","z":"10"},
        {"x":"47","y":"7","z":"-5"},
        {"x":"55","y":"8","z":"0"},
        {"x":"100","y":"100","z":"100"},
        {"x":"55","y":"80","z":"250"}
        ]`)
console.log(b);
