function printAndSum(start, end){
    let sum = 0;
    let buffNum = "";
    for (let i = start; i <= end; i++) {
        buffNum += i + " ";
        sum += i;
    }
    console.log(buffNum);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);