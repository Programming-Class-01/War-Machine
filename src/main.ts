console.log('Hello WARld')

interface ICard {
    value: typeof values;
    suit: typeof suits;
	face: typeof faces;
  }

  interface IDeck {
	owner: typeof owner;
	cardcount: ICard;
  }

var owner = [1, 2];
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var faces = ["Ace", "Jack", "Queen", "King"];

function makeDeck(): IDeck {
	let deck = new Array()
		for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;

}



// function makeDeck()
// {
// 	let deck = IDeck;

// 	for(let i = 0; i < suits.length; i++)
// 	{
// 		for(let x = 0; x < values.length; x++)
// 		{
// 			let card = {Value: values[x], Suit: suits[i]};
// 			deck.push(card);
// 		}
// 	}

// 	return deck;
// }

// makeDeck()


function shuffle(deck)
{
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

shuffle