function solution() {
    let internalStr = "";

    let obj = {
        append(str) { internalStr += str;},
        removeStart(n) {internalStr = internalStr.substring(n);},
        removeEnd(n) {internalStr = internalStr.substring(0, internalStr.length - n)},
        print() {console.log(internalStr);}
    }
    return obj;
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
