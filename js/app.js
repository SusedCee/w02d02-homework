console.log("Welcome to a Pokemon Game!");


//THE BASIC IDEA

//You are going to create a simple card game
// in which a player will be able to battle 
//the autoplayer. The game will deal 3 cards 
//(each of which has a damage value) to the 
//player and three cards to the autoplayer. 
//The player will choose a card, and the 
//computer will randomly choose a card, and
// whichever's card has the highest value 
//will win the point. A round is finished 
//once this has happened three times.


//EXAMPLE PLAY

// -There are 18 Pokemon cards in the deck

// -Eggbert (the player) is dealt three 
//  random cards from the deck

// -The computer is dealt three random cards
//  from the deck

// -Eggbert chooses a card and plays it! It 
//  has a damage of 10.

// -The computer randomly chooses a card and
//  plays it! It has a damage of 8.

// -Eggbert wins!


// The score is displayed:

// -Score: Eggbert: 1, Computer: 0
// -Rounds Won: Eggbert: 0, Computer: 0

// They do this again two more times. The round ends.

// The score is displayed. The rounds won are displayed.


// THE GAME OBJECT

// For each part, think about:

// -What's the best data type for this property? Number?
//  String? Array? object? boolean? Some crazy combination of these).
//    --Hint/reminder: use a property when you want to "keep track" 
//      of something

// -Or should you create a method?
//    --Hint/reminder: use a method when you want to "do" something

// The game should be able to:

// 1. keep a library of all the Pokemon cards that can be played 
//.   (see the array in the "The Cards" section)
// 2. know what cards have been played
// 3. know how many cards are left to be played/dealt overall
// 4. track points for both the player and the computer Note: 
//    Points are determined by the following: If the player's 
//    card beats the computer's card, the player gets one point
//    (and vice versa). If there is a tie, no one gets a point.
// 5. track rounds
// 6. track number of rounds won for both player and computer
// 7. automatically deal 3 cards from the library to the player
//    and 3 cards to the computer each round
// 8. determine the winner of each play
// 9. stop once there are no cards left or not enough to deal 
//    3 to each the player and computer


// THE PLAYER OBJECT

// The player should be able to:

// 1. see their stats: their points and how many rounds they've won.
// 2. see what cards they have been dealt/see what cards are left in
//    their hand
// 3. pick a card from the hand that has been dealt to them 
//    (thereby playing this card agaist the computer's card). 
//    The round ends once this has happened 3 times.
// 4. receive new cards given to them by the game each round.
// 5. see the cards that they have played in the past.

// THE CARDS

const pokemonCards = [
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

const player = {
	playerCards: [],
	usedCards: [],
	score: 0,
	roundsWon: 0
}

let pfirstCard;

const computer = {
	computerCards: [],
	usedCards: [],
	score: 0,
	roundsWon: 0
}

let cfirstCard;
 ////////////////////DEAL HANDS (3 THE PLAYER AND 3 THE COMPUTER) AND SAVE THE ONES USED IN "playerCards" SO IT IS NOT USED AGAIN

function dealCard(){
  	 // looping through deck three times
  	const prandomNumber = Math.floor(Math.random() * pokemonCards.length);//random function to choose 3 cards
  	player.playerCards.push(pokemonCards[prandomNumber]); //three cards chosen get put in the playerCards array
  	pokemonCards.splice(prandomNumber,1); // get the three cards out of original array forever
  	
    const crandomNumber = Math.floor(Math.random() * pokemonCards.length);//random function to choose 3 cards
  	computer.computerCards.push(pokemonCards[crandomNumber]); //three cards chosen get put in the playerCards array
  	pokemonCards.splice(crandomNumber,1); // get the three cards out of original array forever
}


function showCard(){
  for (let  i = 0; i < player.playerCards.length; i++){
    console.log(`Player Card ${player.playerCards[i].name}`)
    console.log(`Card has a damage of ${player.playerCards[i].damage}`)
  }
  for (let  i = 0; i < computer.computerCards.length; i++){
    console.log(`Computer Card ${computer.computerCards[i].name}`)
    console.log(`Computer has a damage of ${computer.computerCards[i].damage}`)
  }
}



  
// playRound()


// // ///////////////Battle
function battle(){
	if(pfirstCard > cfirstCard){
    //gameOverCheck
    player.roundsWon += 1;
    player.score += 1;
    console.log(`You won this round. You have ${player.score} points and the computer has ${computer.score} points`);
    console.log(`Rounds you have won are ${player.roundsWon} and rounds the computer has won are ${computer.roundsWon}`);
	} else if(pfirstCard < cfirstCard){
    computer.roundsWon += 1
    computer.score += 1;
		console.log(`The computer won this round. You have ${player.score} points and the computer has ${computer.score} points`);
    console.log(`Rounds you have won are ${player.roundsWon} and rounds the computer has won are ${computer.roundsWon}`)
    //gameOverCheck
	} else {
		console.log(`This round is a tie. You have ${player.score} points and the computer has ${computer.score} points`)
	  console.log(`Rounds you have won are ${player.roundsWon} and rounds the computer has won are ${computer.roundsWon}`)
    //gameOverCheck
  }
}
battle()


function gameWon(){

  if(player.roundsWon > computer.roundsWon){
    console.log(`You won the game!`);
  } else if (player.roundsWon < computer.roundsWon){
    console.log(`You lost against the computer!`);
  } else {
    console.log(`You tied against the computer!`)
  }
}


function cardGame(){
  pfirstCard = player.playerCards[0].damage;
  cfirstCard = computer.computerCards[0].damage;
  showCard()
  console.log(pfirstCard, "<<player");
  console.log(cfirstCard, "<<computer");
  battle()
  const usedP = player.playerCards.shift();
  player.usedCards.push(usedP);
  const usedC = computer.computerCards.shift();
  computer.usedCards.push(usedC);
  console.log(computer.usedCards);
  dealCard()
}
// // /////////////////Game Over Check
for(let i=0;i<3;i++){
  dealCard();
}  
while(pokemonCards.length>0){
  cardGame();
  gameWon();
}




