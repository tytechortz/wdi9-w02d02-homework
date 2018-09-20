const cards =
[
   {
     name: "Bulbasaur",
     damage: 60
   }, {
     name: "Caterpie",
     damage: 40
   }, {
     name: "Charmander",
     damage: 60
   }, {
     name: "Clefairy",
     damage: 50
   }, {
     name: "Jigglypuff",
     damage: 60
   }, {
     name: "Mankey",
     damage: 30
   }, {
     name: "Meowth",
     damage: 60
   }, {
     name: "Nidoran - female",
     damage: 60
   }, {
     name: "Nidoran - male",
     damage: 50
   }, {
     name: "Oddish",
     damage: 40
   }, {
     name: "Pidgey",
     damage: 50
   }, {
     name: "Pikachu",
     damage: 50
   }, {
     name: "Poliwag",
     damage: 50
   }, {
     name: "Psyduck",
     damage: 60
   }, {
     name: "Rattata",
     damage: 30
   }, {
     name: "Squirtle",
     damage: 60
   }, {
     name: "Vulpix",
     damage: 50
   }, {
     name: "Weedle", 
     damage: 40
   }
];

const eggBert = {
   name: 'Eggbert',
   cardsDealt: [],
   cardsPlayed: [],
};

const computer = {
  name: 'Computer',
  cardsDealt: [],
  carsPlayed: [],

};

const scoreBoard = {
   roundsPlayed: 0,
   eggBertRoundsWon: 0,
   computerRoundsWon: 0,
};

let firstSixCards = [];

function deal() {
for (let i = 0; i<6; i++){
firstSixCards[i] = cards.splice(Math.floor(Math.random()* cards.length), 1);
  }
}

//Gets first 6 cards in play
deal();
//console.log(firstSixCards);

// Divide first 6 cards to each player, 3 each
eggBert.cardsDealt = firstSixCards.slice(0, 3);
console.log(eggBert.cardsDealt);
computer.cardsDealt = firstSixCards.slice(3, 6);
console.log(computer.cardsDealt);

//game play
console.log(eggBert.cardsDealt[1][0].damage);

let eggBertPoints = 0;
let computerPoints = 0;

for(let i = 0; i < 3; i++) {
  if(eggBert.cardsDealt[i][0].damage > computer.cardsDealt[i][0].damage) {
    eggBertPoints ++;
    console.log(eggBertPoints);
  }
}
