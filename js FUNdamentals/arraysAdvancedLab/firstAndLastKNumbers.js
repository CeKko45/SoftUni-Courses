function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    let firstKArr = arr.slice(0,k);
    let lastKArr = arr.slice(-k);
    console.log(`${firstKArr.join(" ")}\n${lastKArr.join(" ")}`);
}
firstAndLastKNumbers([2, 
    7, 8, 9]
    );
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   );