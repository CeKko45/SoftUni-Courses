function phoneBook(input) {
    let phonebook = {};
    for(let line of input) {
        let info = line.split(" ");
        let name = info[0];
        let number = info[1];
        phonebook[name] = number;
    }
    for(let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);
phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);