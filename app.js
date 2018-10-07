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
   roundsWon: 0,
   
};

let computer = {
  name: 'Computer',
  cardsDealt: [],
  carsPlayed: 0,
  roundsWon: 0,
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
  let eggBertScore = 0;
  let computerScore = 0;
  for(let i = 0; i < 3; i++) {
    if(eggBert.cardsDealt[i].damage > computer.cardsDealt[i].damage) {
      eggBertScore ++;
    } else if (
      computer.cardsDealt[i].damage > eggBert.cardsDealt[i].damage) {
      computerScore ++;
    } 
  }
  if(eggBertScore > computerScore) {
    eggBert.roundsWon ++;
    $('#eggBert-roundsWon').text(eggBert.roundsWon);
  } else if
  (computerScore > eggBertScore) {
    computer.roundsWon ++;
    $('#computer-roundsWon').text(computer.roundsWon);
  };
  console.log(eggBert.roundsWon);
  console.log(computer.roundsWon);
}


const battle2 = () => {
  let eggBertScore = 0;
  let computerScore = 0;
  for(let i = 3; i < 6; i++) {
    if(eggBert.cardsDealt[i].damage > computer.cardsDealt[i].damage) {
      eggBertScore ++;
    } else if (
      computer.cardsDealt[i].damage > eggBert.cardsDealt[i].damage) {
      computerScore ++;
    }
  }
  if(eggBertScore > computerScore) {
    eggBert.roundsWon ++;
    $('#eggBert-roundsWon').text(eggBert.roundsWon);
  } else if
  (computerScore > eggBertScore) {
    computer.roundsWon ++;
    $('#computer-roundsWon').text(computer.roundsWon);
  }; 
  console.log(eggBert.roundsWon);
  console.log(computer.roundsWon);  
};

const battle3 = () => {
  let eggBertScore = 0;
  let computerScore = 0;
  for(let i = 6; i < 9; i++) {
  
    if(eggBert.cardsDealt[i].damage > computer.cardsDealt[i].damage) {
      eggBertScore ++;
    } else if (
      computer.cardsDealt[i].damage > eggBert.cardsDealt[i].damage) {
      computerScore ++;
    }
  }
  if(eggBertScore > computerScore) {
    eggBert.roundsWon ++;
    $('#eggBert-roundsWon').text(eggBert.roundsWon);
  } else if
  (computerScore > eggBertScore) {
    computer.roundsWon ++;
    $('#computer-roundsWon').text(computer.roundsWon);
  }
  console.log(eggBert.roundsWon);
  console.log(computer.roundsWon);
};

$("#rnd1").click(function() {
  battle1();
  for(let i = 0; i < 3; i++) {
    $("#battle").append(`<li>${eggBert.cardsDealt[i].name}-${eggBert.cardsDealt[i].damage} vs ${computer.cardsDealt[i].name} ${computer.cardsDealt[3].damage}</li>`);
  }
})

$("#rnd2").click(function() {
  battle2();
  for(let i = 3; i < 6; i++) {
    $("#battle").append(`<li>${eggBert.cardsDealt[i].name}-${eggBert.cardsDealt[i].damage} vs ${computer.cardsDealt[i].name} ${computer.cardsDealt[3].damage}</li>`);
  }
}) 

$("#rnd3").click(function() {
  battle3();
  for(let i = 6; i < 9; i++) {
    $("#battle").append(`<li>${eggBert.cardsDealt[i].name}-${eggBert.cardsDealt[i].damage} vs ${computer.cardsDealt[i].name} ${computer.cardsDealt[3].damage}</li>`);
  }
})


