function subtract() {

    // capture elements
    const firstNumberValue = Number(document
        .getElementById("firstNumber").value);
    const secondNumberValue = Number(document
        .getElementById("secondNumber").value);

    const result = firstNumberValue - secondNumberValue;
    document.getElementById("result").textContent = result;
}