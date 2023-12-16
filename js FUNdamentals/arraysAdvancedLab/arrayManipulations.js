function arrayManipulations(input) {
    function executedCommand(command, parameters, arr) {
        switch (command) {
            case "Add": arr.push(parameters[0]); return arr;
            case "Remove": arr = arr.filter(x => x !== parameters[0]); return arr;
            case "RemoveAt": arr.splice(parameters[0], 1); return arr;
            case "Insert": arr.splice(parameters[1], 0 , parameters[0]); return arr;
        }
        return arr;
    }
    let arr = input[0].split(" ").map(Number);
    let commands = input.slice(1);
    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].split(" ");
        let command = tokens[0];
        let parameters = tokens.slice(1).map(Number);
        arr = executedCommand(command, parameters, arr);
    }
    return arr.join(" ");
}
console.log(arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
));
console.log(arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
));