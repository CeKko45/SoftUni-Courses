function deckOfCards(arrOfCards) {
    let fullDeck = [];
    for (let card of arrOfCards) {
        let splitCard = card.split("");
        let suit = splitCard.pop();
        let face = splitCard.join("");
        let readyCard = playingCards(face, suit);
        if(readyCard === undefined) {
            return console.log( `Invalid card: ${card}`);
        }
        fullDeck.push(readyCard);
    }
    console.log(fullDeck.join(" "));


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
        if(cardObj.face === undefined || cardObj.suit === undefined) {
            return undefined;
        }
        return cardObj.face.toString() + cardObj.suit.toString()
    }
}
deckOfCards(['10D', 'KH', '2C'] );
deckOfCards(['AS', '10D', 'KH', '2C'] );
deckOfCards(['5S', '3D', 'QD', '1C'] );
