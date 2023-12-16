function triangleOfNumbers(n) {
    for(let rows = 1; rows <= n; rows++) {
        let printCurrentLine = "";
        for (let cols = 1; cols <= rows; cols++) {
            
            printCurrentLine += rows + " ";
        }
        console.log(printCurrentLine);
        }
    }
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);