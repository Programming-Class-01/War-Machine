import { ICard } from "./interfaces";

const owner = [1, 2];
const suits = ["spades", "diamonds", "clubs", "hearts"];
const worth = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

function makeDeck(): ICard[] | Error {
    const newDeck: ICard[] = [];
    if (worth.length !== faces.length) {
        return Error(`There are not as many faces as there are worths, please check constants.`)
    }

    for (let i = 0; i < suits.length; i++) {

        for (let c = 0; c < worth.length; c++) {
            const points = worth[c]
            const suit = suits[i]
            const face = faces[c]

            if (typeof points === `undefined`) return Error(`CardArray at ${worth[c]} is undefined`)
            if (typeof suit === `undefined`) return Error(`CardArray at ${suits[i]} is undefined`)
            if (typeof face === `undefined`) return Error(`CardArray at ${faces[c]} is undefined`)

            newDeck.push({ worth: points, suit: suit, face: face })
        }
    }
    return newDeck;
}
makeDeck

function shuffle() {
    const deck = makeDeck()
    if (deck instanceof Error) return Error(`makeDeck function failed, check it out.`)
    const shuffledDeck: ICard[] = []
    const iterations = deck.length
    for (let i = 0; i < iterations; i++) {
        const location1 = Math.floor((Math.random() * deck.length));
        if (location1 === undefined) return Error(`Location1 is undefined.`);

        const pickedCard = deck.splice(location1 - 1, 1)[0];
        if (pickedCard === undefined) return Error(`Location1 is undefined.`);
        shuffledDeck.push(pickedCard)
    }
    return shuffledDeck
}
shuffle