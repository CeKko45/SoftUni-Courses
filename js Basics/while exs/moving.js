function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * length * height;
    let index = 3;
    let neededSpace = 0;

    while (neededSpace <= freeSpace) {
        if (input[index] === "Done") {
            break;
        }
        neededSpace += Number(input[index]);
        index++;
    }
    if (neededSpace >= freeSpace) {
        console.log(`No more free space! You need ${neededSpace - freeSpace} Cubic meters more.`);
    } else if (neededSpace <= freeSpace) {
        console.log(`${freeSpace - neededSpace} Cubic meters left.`);
    }
}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])

