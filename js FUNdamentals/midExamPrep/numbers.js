function numbers(input) {
    let arr = input.split(" ").map(x => Number(x));
    let sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    let res = arr.filter(value => value > sum / arr.length)
    .sort((a,b) => b - a)
    .splice(0, 5);
    console.log(res.length > 0 ? res.join(" ") : "No");
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');