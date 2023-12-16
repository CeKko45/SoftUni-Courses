function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let originalString = String(arr[i]);
        let originalArr = originalString.split("");
        let reverseArr = originalArr.reverse();
        let reversedString = reverseArr.join("");
        if (originalString === reversedString) {
            console.log("true");
        } else {
            console.log("false");
        }

    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);