function trainTheTrainers(input) {
    let juryCount = Number(input[0]);
    let allGrades = 0;
    let sumGrade = 0;
    let presentationCounter = 0;
    let index = 1;

    while (input[index] !== "Finish") {
        let presentation = input[index];
        let currentGrade = 0;
        let judges = 0;
        index++;
        while (judges < juryCount) {
            currentGrade += Number(input[index]);
            presentationCounter++;
            allGrades += Number(input[index]);
            judges++;
            index++;
        }
        sumGrade = currentGrade / juryCount;
        console.log(`${presentation} - ${sumGrade.toFixed(2)}.`);
    }
    let finalGrade = allGrades / presentationCounter;
    console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);
}
trainTheTrainers (["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

