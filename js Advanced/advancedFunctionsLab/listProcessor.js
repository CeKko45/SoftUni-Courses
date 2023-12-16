function listProcessor(commands) {
    let commandProcessor = (function() {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) => list = list.filter(x => x !== item),
            print: () => console.log(list.join(","))
        }
    })();

    for(let command of commands) {
        let [commandName, argument] = command.split(" ");
        commandProcessor[commandName](argument);
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']
);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']
);