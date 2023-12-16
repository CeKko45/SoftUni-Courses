function sumPrimeNonPrime(input) {
    let index = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    let flag = false;
    let current = input[index];

    while (current !== "stop") {
        let currentNumber = Number(current);
        index++;
        current = input[index];
        if (currentNumber < 0) {
            flag = true;
            console.log("Number is negative.");
            continue;
        }
        let isPrime = true;
        if (currentNumber > 1) {
            for (let i = 2; i < currentNumber; i++) {
                if (currentNumber % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            sumPrime += currentNumber;
        } else {
            sumNonPrime += currentNumber;
        }  
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
