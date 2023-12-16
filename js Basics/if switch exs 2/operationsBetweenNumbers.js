function operationsBetweenNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} + ${secondNumber} = ${result} - even`);
            } else {
                console.log(`${firstNumber} + ${secondNumber} = ${result} - odd`);
            }
            break;
        case "-":
            result = firstNumber - secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} - ${secondNumber} = ${result} - even`);
            } else {
                console.log(`${firstNumber} - ${secondNumber} = ${result} - odd`);
            }
            break;
        case "*":
            result = firstNumber * secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} * ${secondNumber} = ${result} - even`);
            } else {
                console.log(`${firstNumber} * ${secondNumber} = ${result} - odd`);
            }
            break;
        case "/":
            result = firstNumber / secondNumber;
            if (secondNumber === 0) {
                console.log(`Cannot divide ${firstNumber} by zero`);
            } else {
                console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            result = firstNumber % secondNumber;
            if (secondNumber === 0) {
                console.log(`Cannot divide ${firstNumber} by zero`);
            } else {
                console.log(`${firstNumber} % ${secondNumber} = ${result}`);
            }
            break;
    }
}
operationsBetweenNumbers(["7",
    "3",
    "*"])





