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

// const game = {

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
]//,
// }

const player = {
	playerCards: [],
	usedCards: [],
	score: 0,
	roundsWon: 0
}//,


const computer = {
	computerCards: [],
	usedCards: [],
	score: 0,
	roundsWon: 0
}//,



 ////////////////////DEAL HANDS (3 THE PLAYER AND 3 THE COMPUTER) AND SAVE THE ONES USED IN "usedCards" SO IT IS NOT USED AGAIN

const dealCard = () => {
  	for (let i = 0; i < 3; i++) { // looping through deck three times
  	const prandomNumber = Math.floor(Math.random() * pokemonCards.length);//random function to choose 3 cards
  	player.playerCards.push(pokemonCards[prandomNumber]); //three cards chosen get put in the playerCards array
  	pokemonCards.splice(prandomNumber,1); // get the three cards out of original array forever
  	
    const crandomNumber = Math.floor(Math.random() * pokemonCards.length);//random function to choose 3 cards
  	computer.computerCards.push(pokemonCards[crandomNumber]); //three cards chosen get put in the playerCards array
  	pokemonCards.splice(crandomNumber,1); // get the three cards out of original array forever
  	
  	const chooseOneCard = 
  	}
}


//}



////////////////Play a round








////////////////// Combat






/////////////////Update Score








///////////////// Play Game





























































//CHOOSING 3 RANDOM CARDS
//Third Try
// var cardsDrawn = [], 
// 	counter = 0,
// 	randomCards = 0; 


// const threeChosenCards = () => { // the name where i can access the array to use at other functions
// 	let randomCards = [] // array where the three random cards will go
// 	for (let i = 0; i < pokemonChoices.length; i++){ //loop through the pokemonChoices array
// 		if (pokemonChoices < 0){ //if pokemonChoices are true then do the next
// 			[Math.floor(Math.random()*pokemonChoices.length)];
// 		} randomCards.push(pokemonChoices.splice(randomCards,1)):
// 			 // choose 3 random cards and slice them (take out of the original array to not use again) and put them in RandomCards
// 	}
// console.log(String(randomCards[counter]));
// counter +=1;
// 	 // } return randomCards 
// }
// while (counter < pokemonChoices);

// console.log(threeChosenCards(), "<--- threeChosenCards");

// playerChoices = threeChosenCards
// computerChoices = threeChosenCards

// computerCardChoice ()


// // CONDITIONALS - WHO BEATS WHO
// // need to test whether the game is still going or not
// const checkWinner = () => {
//     if (playerChoice.damage === computerChoice.damage){
//         console.log("TIE GAME, no one gets a point");
//     } else if (playerChoice.damage > playerChoice){
//         playersScore +=1;
//     } else (playerChoice < computersChoice){
//         computersScore +=1;
//     }
// }
//     console.log("The player chooses " + playerChoice + "and the computer chooses " + computerChoice);
//     console.log("Player Score: " + playersScore + " vs Computer Score: " + computersScore)


// playerChoice = '';

// const playerChooses = () => {
//     playerChoice = prompt("Choose between ${threeChosenCards");
// }


// const askPlayerIfTheyWantToContinue = () => {
//     const response = prompt("Care to play again? y/n");
//     if(response === "n"){
//         gameOn = false;
//     } 
// }

// while(gameOn === true){
//     playerChooses();
//     computerChooses();
//     checkWinner();
//     askPlayerIfTheyWantToContinue();
// }



















// // ISOLATING DAMAGE NUMBERS IN ONE ARRAY
// At first tried to isolate the damage instead of choosing 3 random cards

// const findingDamage = () => {
// 	let damageIsolated = []
// 	for(i = 0; i < pokemonChoices.length; i++){
// 		if(pokemonChoices[i]["damage"] > 0){
// 		damageIsolated.push(pokemonChoices[i]["damage"])
// 		}
// 	} return damageIsolated
// }
// console.log(findingDamage());


// Second Try
// const threeRandomCards = () => {
//     const randomPokemon = pokemonChoices[Math.floor(Math.random()*pokemonChoices.length)];
//     console.log(`Your three Pokemon are ${randomPokemon}`);
//     randomCards = randomPokemon;
// 	}

// console.log(threeRandomCards(), "<--- threeRandomCards");



//3 RANDOM CARDS -  from pokemonChoices array (random and take the three out of the list till we go through all the cards)

// const randomCards = () => {
//     const randomPokemon = pokemonChoices[Math.floor(Math.random()*pokemonChoices.length)];
//     console.log(`Your three Pokemon are ${randomPokemon}`);
//     randomCards = randomPokemon;
// 	}

// console.log(randomCards(), "<--- randomCards");




// COMPUTER CHOICE -  from findingDamage array (random)
// const computerChooses = () => {
//     const fighterOneDamage = findingDamage[Math.floor(Math.random()*findingDamage.length)];
//     console.log(`The computer has a damage of ${fighterOneDamage}`);
//     computerChoice = fighterOneDamage;
// 	}

// console.log(computerChooses(), "<--- computerChooses");


// PLAYER CHOICE - from findingDamage array (random)
// const playerChooses = () => {
//     const fighterTwoDamage = findingDamage[Math.floor(Math.random()*findingDamage.length)];
//     console.log(`The player has a damage of ${fighterTwoDamage}`);
//     playerChoice = fighterTwoDamage;
// }
// console.log(playerChooses(), "<--- playerChooses");



// // // CONDITIONALS - WHO BEATS WHO
// // // need to test whether the game is still going or not
// const checkWinner = () => {
//     if (computerChoice === playerChoice){
//         console.log("TIE GAME, no one gets a point");
//     } else if (computerChoice > playerChoice){
//         computersScore +=1;
//     } else (computerChoice < playerChoice){
//         playersScore +=1;
//     }
// }
//     console.log("The player chooses " + playerChoice + "and the computer chooses " + computerChoice);
//     console.log("Player Score: " + playersScore + " vs Computer Score: " + computersScore)





