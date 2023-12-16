function aMinerTask(arr) {
let map = new Map();
for(let i = 0; i < arr.length; i += 2){
    let ore = arr[i];
    let quantity = Number(arr[i + 1]);
    if(!map.has(ore)) {
        map.set(ore, +quantity);
    } else {
        let currentQuantity = map.get(ore);
        let newQuantity = currentQuantity += quantity;
        map.set(ore, newQuantity);
    }
}
for(let key of map) {
    console.log(`${key[0]} -> ${key[1]}`);
}
}
// aMinerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
//     ]
//     );
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );