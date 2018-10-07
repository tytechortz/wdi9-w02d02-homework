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

let eggBert = {
   name: 'Eggbert',
   cardsDealt: [],
   cardsPlayed: 0,
};

let computer = {
  name: 'Computer',
  cardsDealt: [],
  carsPlayed: 0,
};



let firstSixCards = [];
//Gets first 6 cards in play
function deal() {
for (let i = 0; i<6; i++){
firstSixCards[i] = cards.splice(Math.floor(Math.random()* cards.length), 1,)[0];
  }
}

deal();
console.log(firstSixCards);


// // Divide first 6 cards to each player, 3 each
// eggBert.cardsDealt = firstSixCards.slice(0, 3);
// computer.cardsDealt = firstSixCards.slice(3, 6);

// //game play
// function play() 
