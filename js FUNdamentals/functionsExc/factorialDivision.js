function factorialDivision(firstNum, secondNum) {
    function factorialCalculator(firstNum) {
        let res = 1;
        for (let i = firstNum; i > 1; i-= 2) {
            res *= i * (i - 1);
        }
        return res;
    }
    let firstFactorialNum = factorialCalculator(firstNum);
    let secondFactorialNum = factorialCalculator(secondNum);
    console.log((firstFactorialNum / secondFactorialNum).toFixed(2));
}
factorialDivision(5,2);
factorialDivision(6,2);