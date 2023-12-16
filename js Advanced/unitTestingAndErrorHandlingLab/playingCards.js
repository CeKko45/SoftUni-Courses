function playingCards(face, suit) {
    face = face.toUpperCase();
    suit = suit.toUpperCase();
    let faceDict = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": "J",
        "Q": "Q",
        "K": "K",
        "A": "A"
    }
    let suitDict = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }
    let cardObj = {};
    cardObj.face = faceDict[face];
    cardObj.suit = suitDict[suit];
    if(cardObj.face === undefined) {
        throw new Error("Error");
    }
    return cardObj.face.toString() + cardObj.suit.toString()
}

console.log(playingCards('A', 'S' ));
console.log(playingCards('10', 'H' ));
console.log(playingCards('1', 'C'));
