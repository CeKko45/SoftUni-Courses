function walking(input) {
    let goal = 10000;
    let index = 0;
    let dailyWalk = input[index];

    while (goal >= 0) {
        if (input[index] === "Going home") {
            index++;
            dailyWalk = Number(input[index]);
            goal -= dailyWalk;
            break;
        }
        dailyWalk = Number(input[index]);
        goal -= dailyWalk;
        index++;

    }
    if (goal <= 0 ) {
        console.log("Goal reached! Good job!");
        console.log(`${Math.abs(goal)} steps over the goal!`);
    } else {
        console.log(`${goal} more steps to reach goal.`);
    }
}
walking (["125",
"250",
"4000",
"30",
"2678",
"4682"])

