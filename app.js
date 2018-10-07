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
   score: 0,
};

let computer = {
  name: 'Computer',
  cardsDealt: [],
  carsPlayed: 0,
  score: 0,
};


//Fisher-Yates shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

let cardsShuffled = [];

$("#start").click(function() {
  cardsShuffled = shuffle(cards);
  $("#game-on").append("Cards Dealt");
  $("#start").hide();
  

      const divideCards = () => {
        eggBert.cardsDealt = cardsShuffled.slice(0, 9);
        computer.cardsDealt = cardsShuffled.slice(9, 18);
        console.log(eggBert.cardsDealt);
        console.log(computer.cardsDealt);
      }
      divideCards();
});


const battle1 = () => {
  for(let i = 0; i < 3; i++) {
    if(eggBert.cardsDealt[i].damage > computer.cardsDealt[i].damage) {
      eggBert.score ++;
    } else if (
      computer.cardsDealt[i].damage > eggBert.cardsDealt[i].damage) {
      computer.score ++;
    }
  }
};


$("#test").click(function() {
  battle1();
  $("#battle").append(`<li>${eggBert.cardsDealt[0].name}-${eggBert.cardsDealt[0].damage} vs ${computer.cardsDealt[0].name} ${computer.cardsDealt[0].damage}</li>`);
  $("#battle").append(`<li>${eggBert.cardsDealt[1].name}-${eggBert.cardsDealt[1].damage} vs ${computer.cardsDealt[1].name} ${computer.cardsDealt[1].damage}</li>`);
  $("#battle").append(`<li>${eggBert.cardsDealt[2].name}-${eggBert.cardsDealt[2].damage} vs ${computer.cardsDealt[2].name} ${computer.cardsDealt[2].damage}</li>`);
  console.log(eggBert.score);
  console.log(computer.score);
})




// // Divide first 6 cards to each player, 3 each
// eggBert.cardsDealt = firstSixCards.slice(0, 3);
// computer.cardsDealt = firstSixCards.slice(3, 6);

// //game play
// function play() 
