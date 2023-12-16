function examPreparation(input) {
    let negativeMax = Number(input[0]);
    let index = 1;
    let positiveGrades = 0;
    let negativeGrades = 0;
    let sumGrades = 0;
    let finalTask = " ";
    let negativeCount = 0;

    while (negativeCount < negativeMax) {
        let taskIndex = input[index];
        if (taskIndex === "Enough") {
            break;
        }
        finalTask = taskIndex;
        index++;
        let gradeIndex = Number(input[index]);
        if (gradeIndex > 4) {
            positiveGrades += gradeIndex;
        } else if (gradeIndex <= 4) {
            negativeGrades += gradeIndex;
            negativeCount++;
        }
        sumGrades++;
        index++;
    }
    if (negativeCount >= negativeMax) {
        console.log(`You need a break, ${negativeCount} poor grades.`);
    } else if (negativeCount <= negativeMax) {
        console.log(`Average score: ${((positiveGrades + negativeGrades) / sumGrades).toFixed(2)}`);
        console.log(`Number of problems: ${sumGrades}`);
        console.log(`Last problem: ${finalTask}`);
    }
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


