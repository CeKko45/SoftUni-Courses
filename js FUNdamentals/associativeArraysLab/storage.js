function storage(arr) {
    let map = new Map();
    for(let line of arr) {
        let info = line.split(" ");
        let product = info[0];
        let quantity = Number(info[1]);   
        if(!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    }
    for(let key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);