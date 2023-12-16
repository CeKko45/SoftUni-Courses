function listOfNames(arrNames) {
    let sortedNamesArr = arrNames.sort((nameA, nameB) => nameA.localeCompare(nameB));
    sortedNamesArr.forEach((name, index) => console.log(`${index + 1}.${name}`));
}
listOfNames(["John",
"Bob",
"Christina",
"Ema"]
);