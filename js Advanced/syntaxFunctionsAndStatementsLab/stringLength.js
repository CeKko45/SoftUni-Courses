function stringLength(firstStr, secondStr, thirdStr) {
    let sumLength = firstStr + secondStr + thirdStr;
    let avgLength = Math.round(sumLength.length / 3);
    console.log(sumLength.length);
    console.log(avgLength);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');