//The getComputerChoice functions purpose is to generate 1 of the options at random.
//It does this by using Math.random to generate a random number between 0 and 1
//using * 3 scales that number to be between 0 and 3
//Math.floor then rounds down the number to the nearest interger 
//the if else statement then links one of the desired values to that number to give you one of the desired values at random

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//This next bit of code lays out the structure for the game.

//These two variables are used for the scoreboard 
//Both are given a value of 0 so they can be increased (depening on the winner) gradually by 1 using ++.

let playerScore = 0;
let computerScore = 0;


//The game functions overall purpose is to keep track of the score and decalre player to be the winner or loser.
//In order for it to run the playGame function is placed inside it.


function game() {
    
//The for loop ensures the game is repeated 5 times before declaring a winner.
//The first console.log displays the current round being played in the console.
//The result variable is used to store the result of the game.
//The last console.log displays the result of the game as displayed in the playGame function.

    for (let round = 1; round <= 5; round++) {
        console.log("Round " + round);
        let result= playGame();
        console.log(result);
    }

//This if else statement purpose is to display who won the game after 5 rounds.


    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a draw! No overall winner.");
    }

//This is the playGame function its purpose is to dictate the rules of the game and how each scenario works.
//First the playerChoice variable is established to prompt the player to enter one of the required values.
//The first if statement decalres what values are acceptable for a player to enter before moving on to the next stage.
//Next a variable called computerChoice is created to store the getComputerChoice function made earlier.
//Another two vairiables are created playerChoiceLower and computerChoiceLower which store the values of the computer and player choices whilst also negating any issues caused by using lower or uppercase letters by making it case insensitive using the .toLowerCase().
//The next if else statement first lay out a possible scenario in the paranathases.
//Based on the scenario it returns a string first decalring the result and second the scores for that round.
//The last else tatement is linked to the first if statement, it decalres an incorrect value entered and instructs player what values are accepted.



function playGame() {


        let playerChoice = prompt("Enter rock, paper or scissors");
        if(["rock", "paper", "scissors"].includes(playerChoice.toLowerCase())) {

    
    let computerChoice= getComputerChoice();
    let playerChoiceLower = playerChoice.toLowerCase();
    let computerChoiceLower = computerChoice.toLowerCase();

    if (playerChoiceLower === "rock" && computerChoiceLower === "paper") {
        return "You lose! Paper beats rock. Player Score:" + (playerScore) + " ComputerScore:" + (++computerScore);
    } else if (playerChoiceLower === "rock" && computerChoiceLower === "scissors") {
        return "You win! Rock beats Scissors. Player Score:" + (++playerScore) + " Computer Score:" + (computerScore);
    } else if (playerChoiceLower === "paper" && computerChoiceLower === "rock") {
        return "You win! Paper beats rock. Player Score:" + (++playerScore) + " Computer Score:" +(computerScore);
    } else if (playerChoiceLower === "paper" && computerChoiceLower === "scissors") {
        return "You lose! Scissors beats paper. Player Score:" + (playerScore) + " Computer Score:" + (++computerScore);
    } else if (playerChoiceLower === "scissors" && computerChoiceLower === "paper") {
        return "You win! Scissors beats paper. Player Score:" + (++playerScore) + " Computer Score:" + (computerScore);
    } else if (playerChoiceLower === "scissors" && computerChoiceLower === "rock") {
        return "You lose! Rock beats scissors. PLayer Score:" + (playerScore) + "Computer Score:" + (++computerScore);
    } else if (playerChoiceLower === computerChoiceLower) {
        console.log("It's a draw! Play again.");
    } 
} else {
    alert ("Invalid choice. Enter rock, paper or scissors.");
    }


 }
}

//This game() calls for the function to run thus allowing the game to start upon visiting the page.

game()