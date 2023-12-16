function trekkingMania(input) {
    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let allPeople = 0;

    for (let index = 1; index <= groups; index++) {
        let currentGroup = Number(input[index]);
        allPeople += currentGroup;
        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup <= 12) {
            monblan += currentGroup;
        } else if (currentGroup <= 25) {
            kilimandjaro += currentGroup;
        } else if (currentGroup <= 40) {
            k2 += currentGroup;
        } else if (currentGroup > 40) {
            everest += currentGroup;
        }
       
    }
    console.log(`${((musala / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblan / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2 / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((everest / allPeople) * 100).toFixed(2)}%`);
}
trekkingMania (["5",
"25",
"41",
"31",
"250",
"6"])

