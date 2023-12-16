function sortAnArrayByTwoCriteria(arrNames) {
    let sortedArr = arrNames.sort((numA, numB) => {
        if(numA.length - numB.length === 0) {
            return numA.localeCompare(numB);
        }
        return numA.length - numB.length;
    })
    console.log(sortedArr.join("\n"));
}
sortAnArrayByTwoCriteria(['alpha',
'beta', 'gamma'] );
sortAnArrayByTwoCriteria(['Isacc',
'Theodor','Jack',
'Harrison',
'George']
);
sortAnArrayByTwoCriteria(['test',
'Deny', 'omen',
'Default']
);