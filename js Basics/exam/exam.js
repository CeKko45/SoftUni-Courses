function exam(input) {
    let numberOfStudents = Number(input[0]);
    let fivePlus = 0;
    let fourPlus = 0;
    let threePlus = 0;
    let fails = 0;
    let individualGrade = 0;

    for (let score = 1; score <= numberOfStudents; score++) {
        let grade = input[score];
        individualGrade += Number(input[score]);
        if (grade >= 5) {
            fivePlus++;
        } else if (grade >= 4) {
            fourPlus++;
        } else if (grade >= 3) {
            threePlus++;
        } else if (grade < 3) {
            fails++;
        }
    }
    let groupOne = fivePlus / numberOfStudents * 100;
    let groupTwo = fourPlus / numberOfStudents * 100;
    let groupThree = threePlus / numberOfStudents * 100;
    let groupFour = fails / numberOfStudents * 100;
    let avarageGrade = individualGrade / numberOfStudents;
    console.log(`Top students: ${groupOne.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${groupTwo.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${groupThree.toFixed(2)}%`);
    console.log(`Fail: ${groupFour.toFixed(2)}%`);
    console.log(`Average: ${avarageGrade.toFixed(2)}`);
}
exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])
