function schoolLibrary(bookCase) {
    let shelf = bookCase.shift().split("&");
    let command = bookCase.shift().split(" | ");
    while (command[0] !== "Done") {
        switch (command[0]) {
            case "Add Book":
                addBook(shelf, command);
                break;
            case "Take Book":
                takeBook(shelf, command);
                break;
            case "Swap Books":
                if (shelf.indexOf(command[1]) === -1 || shelf.indexOf(command[2]) === -1) {
                    break;
                }
                let temp = command[1];
                let firstBookIndex = shelf.indexOf(command[1]);
                let secondBookIndex = shelf.indexOf(command[2]);
                shelf[firstBookIndex] = shelf[secondBookIndex];
                shelf[secondBookIndex] = temp;
                
                break;
            case "Insert Book":
                inserBook(shelf, command);
                break;
            case "Check Book":
                checkBook(shelf, command);
                break;
        }
        command = bookCase.shift().split(" | ");
    }
    return shelf.join(", ");

    function addBook(shelf, command) {
        if (shelf.includes(command[1])) {
            return;
        }
        return shelf.unshift(command[1]);
    }

    function takeBook(shelf, command) {
        if (shelf.includes(command[1])) {
            return shelf.splice(shelf.indexOf(command[1]), 1);
        }
        return;
    }

    function inserBook(shelf, command) {
        if (shelf.includes(command[1])) {
            return;
        }
        return shelf.push(command[1]);
    }

    function checkBook(shelf, command) {
        if (command[1] > shelf.length - 1) {

            return 
        }
        return console.log(String(shelf[command[1]]));
    }

}
console.log(schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"]));
console.log(schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"]));
console.log(schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 3",
    "Swap Books | Don Quixote | Ulysses",
    "Done"]));