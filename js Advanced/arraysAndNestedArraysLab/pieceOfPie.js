function pieceOfPie(arr, firstFlavour, lastFlavour) {
    let begining = arr.indexOf(firstFlavour);
    let end = arr.indexOf(lastFlavour);
    let resultArr = arr.slice(begining, end + 1);
    return resultArr;
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));