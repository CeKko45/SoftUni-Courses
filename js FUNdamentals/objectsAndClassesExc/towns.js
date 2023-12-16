function towns(input) {
    function toSecondDecimal(num) {
        num = Number(num);
        return num.toFixed(2);
    }
    for (let townInfo of input) {
        let currentTown = townInfo.split(" | ");
        let obj = {
            town: currentTown.shift(),
            latitude: toSecondDecimal(currentTown.shift()),
            longitude: toSecondDecimal(currentTown.shift())
        }
        console.log(obj);
    }
}
console.log(towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
));
console.log(towns(['Plovdiv | 136.45 | 812.575']));