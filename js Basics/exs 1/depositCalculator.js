function depositCalculator(input) {
    let deposit = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearlyInterest = Number(input[2]);
    
    let currentInterest = deposit * yearlyInterest / 100;
    let monthlyInterest = currentInterest / 12;
    let wholeSum = deposit + depositTerm * monthlyInterest;
    console.log(wholeSum)
}
depositCalculator(["200", "3", "5.7"])