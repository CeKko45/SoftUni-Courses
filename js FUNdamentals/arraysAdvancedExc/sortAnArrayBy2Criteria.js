function sortAnArrayBy2Criteria(input) {
    input.sort((a,b) => {
    if (a.length - b.length === 0) {
        return a.localeCompare(b);
    }
    return a.length - b.length;
})
    console.log(input.join("\n"));
}
sortAnArrayBy2Criteria(['gamma', 'beta', 'alpha']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);