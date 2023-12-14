console.log('Hello WARld')

interface ICard {
	worth: number;
	suit: string;
	face: string;
}

interface IDeck {
	owner: number;
	cardcount: ICard;
}

var owner = [1, 2];
var suits = ["spades", "diamonds", "clubs", "hearts"];
var worths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var faces = ["Ace", "Jack", "Queen", "King"];

function makeDeck(deck: IDeck) {
	const newDeck: IDeck[] = [];
	for (let i = 0; i < suits.length; i++) {
		for (let x = 0; x < worths.length; x++)
			for (let c = 0; c < faces.length; c++)
				if (typeof worths === `undefined`) return Error(`shit's fucked bruh`) {
			const card: ICard = { worth: worths[x], Suit: suits[i], Face: faces[c] };
			newDeck.push(card);
		}
	}

	return deck;

}
makeDeck




function shuffle(deck) {
	for (let i = 0; i < 1000; i++) {
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

shuffle