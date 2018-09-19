/*
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
      damage: 59
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 61
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 61
    }, {
      name: "Nidoran - female",
      damage: 58
    }, {
      name: "Nidoran - male",
      damage: 51
    }, {
      name: "Oddish",
      damage: 41
    }, {
      name: "Pidgey",
      damage: 52
    }, {
      name: "Pikachu",
      damage: 53
    }, {
      name: "Poliwag",
      damage: 47
    }, {
      name: "Psyduck",
      damage: 63
    }, {
      name: "Rattata",
      damage: 31
    }, {
      name: "Squirtle",
      damage: 56
    }, {
      name: "Vulpix",
      damage: 49
    }, {
      name: "Weedle", 
      damage: 39
    }
  ]
  */
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
  ]


//Get 6 random cards from deck
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}
  
  
var randomCards = getRandomSubarray(cards, 6);
console.log(randomCards);

// Slice 6 cards into 3 for each player arrays
eggbertCards = randomCards.slice(0,3);
computerCards = randomCards.slice(3,6);
//console.log(eggbertCards, computerCards);

let eggbertScore = 0;
let computerScore = 0;

const eggbert = {
    cards: eggbertCards,
    score: computerScore,
}
const computer = {
    cards: computerCards,
    score: computerScore,
}
//console.log(eggbert, computer);
//let eggbertDamage = x;
//let computerDamage = y;
  


//Game play
for(let i = 0; i < 3; i++) {
    if(eggbertCards[i].damage > computerCards[i].damage){
        eggbertScore += 1;
    } else {
        computerScore += 1;
    }
        console.log("Eggbert's score is " + eggbertScore + " and computer's score is " + computerScore);
    }







