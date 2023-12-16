function addressBook(input) {
    let addresses = {};
    for(let line of input) {
        let [name, address] = line.split(":");
        addresses[name] = address;
    }
    let sortedAdresses = Object.entries(addresses).sort((keyA, keyB) => keyA[0].localeCompare(keyB[0]));
    for(let [key, value] of Object.values(sortedAdresses)) {
        console.log(`${key} -> ${value}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);