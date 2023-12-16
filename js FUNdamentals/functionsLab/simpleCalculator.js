function simpleCalculator(numOne, numTwo, operator) {
    let multipliedResultFunction = (numOne, numTwo) => numOne * numTwo; 
    let dividedResultFunction = (numOne , numTwo) => numOne / numTwo;
    let addedResultFunction = (numOne, numTwo) => numOne + numTwo;
    let subtractedResultFunction = (numOne, numTwo) => numOne - numTwo;
    switch (operator) {
        case "multiply":
            let multipliedResult = multipliedResultFunction(numOne, numTwo);
            return multipliedResult;
        case "divide":
            let dividedResult = dividedResultFunction(numOne, numTwo);
            return dividedResult
        case "add":
            let addedResult = addedResultFunction(numOne, numTwo);
            return addedResult
        case "subtract":
            let subtractedResult = subtractedResultFunction(numOne, numTwo);
            return subtractedResult
    }
}
console.log(simpleCalculator(5, 5, 'multiply')); 
console.log(simpleCalculator(40, 8, 'divide'));
console.log(simpleCalculator(12, 19, 'add'));
console.log(simpleCalculator(50, 13, 'subtract'));