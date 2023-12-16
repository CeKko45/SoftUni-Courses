function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let floorRooms = "";
    for (let i = floors; i >= 1; i--) {
        for (let j = 0; j <= rooms - 1; j++) {
            if (i === floors) {
                floorRooms += `L${i}${j} `;
            } else {
                if (i % 2 === 0) {
                    floorRooms += `O${i}${j} `;
                } else {
                    floorRooms += `A${i}${j} `;
                }
            }
        }
        console.log(floorRooms);
        floorRooms = "";
    }
}
building(["6", "4"])