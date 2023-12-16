function loadingBar(num) {
    let counter = num / 10;;
    let arr = [];
for (let i = 10; i <= num; i+=10) {
    arr.push("%");
}
for (let i = counter; i < 10; i++) {
    arr.push(".");
}
if (num === 100) {
    console.log(`${num}% [${arr.join("")}]`);
} else {
    console.log(`${num}% [${arr.join("")}]`);
    console.log("Still loading...");
}
}
loadingBar(30);
loadingBar(50);
loadingBar(100);