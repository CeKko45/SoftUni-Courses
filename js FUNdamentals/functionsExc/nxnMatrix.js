function nxnMatrix(n) {
    let printCurrentLine = "";
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            
            printCurrentLine += n + " ";
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
    }
}
nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);