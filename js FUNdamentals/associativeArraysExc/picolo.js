function picolo(arr) {
    let map = new Map();
    
    for(let carInfo of arr) {
        let [direction, carNumber] = carInfo.split(", ");
        if(direction === "IN") {
            map.set(carNumber, "");
        } else {
            map.delete(carNumber);
        }
    }
    let sortedLicenses = Array.from(map).sort((a,b) => a[0].localeCompare(b[0]));
    if (map.size === 0) {
        console.log("Parking Lot is Empty");
    }else {
        for (let carNumber of sortedLicenses) {
            console.log(carNumber[0]);
        }
    }
}
picolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
picolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);