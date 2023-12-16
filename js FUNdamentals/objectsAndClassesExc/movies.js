function movies(data) {
    let obj = {};
    let addTitleArr = [];
    for (let command of data) {
        let commandSplit = command.split(" ");
        if (command.includes("addMovie")) {
            let title = commandSplit.slice(1);
            addTitleArr.push(title.join(" "));
        }
    }
    for (let i = 0; i < addTitleArr.length; i++) {
        let hasADirector = false;
        let hasADate = false;
        obj.name = addTitleArr[i];
        for (let command of data) {
            let commandSplit = command.split(" ");
            if (command.includes("directedBy")) {
                let title = commandSplit.slice(0, commandSplit.indexOf("directedBy")).join(" ");
                if (title === obj.name) {
                    let director = commandSplit.slice(commandSplit.indexOf("directedBy") + 1).join(" ");
                    obj.director = director;
                    hasADirector = true;
                }
            }
            if (command.includes("onDate")) {
                let title = commandSplit.slice(0, commandSplit.indexOf("onDate")).join(" ");
                if (title === obj.name) {
                    let date = String(commandSplit.slice(commandSplit.indexOf("onDate") + 1));
                    obj.date = date;
                    hasADate = true;
                }
            }
        }
        if (hasADate && hasADirector) {
            console.log(JSON.stringify(obj));
        }
    }
}
// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]
// );
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);