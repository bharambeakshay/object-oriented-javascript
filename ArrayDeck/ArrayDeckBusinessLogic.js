class DeckOfCards {
    constructor() {
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

    }
}
class Shuffle extends DeckOfCards {

    cards() {

        let deck = [];

        //Deck of card
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                deck.push(this.suits[i] + " - " + this.ranks[j]);
            }
        }
        for (let k = 0; k < deck.length; k++) {
            console.log(deck[k]);
        }

        //Random cards
        for (let i = 0; i < deck.length; i++) {
            let random = Math.floor(Math.random() * deck.length);
            let temp = deck[random];
            deck[random] = deck[i];
            deck[i] = temp;
        }

        //Distribute cards to 4 players
        for (let i = 1; i <= 4; i++) {

            console.log("\nPlayer number " + i + " have cards:");
            for (let j = 0; j < 9; j++) {
                console.log(deck.pop());
            }
        }
    }
}


let random = new Shuffle();
random.cards();