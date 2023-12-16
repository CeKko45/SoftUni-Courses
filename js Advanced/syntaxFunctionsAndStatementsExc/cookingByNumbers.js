function cookingByNumbers(...params) {
    let num = Number(params[0]);
    let commandsDictionary = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x - x * 0.2
    };
    for(let i = 1; i < params.length; i++) {
        let command = params[i];
        num = commandsDictionary[command](num);
        console.log(num);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake',
'fillet');