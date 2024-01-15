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

//make a new function called (game)
//this function records the results of the match
//overall the game must be played to the best of 5 to determine a winner 
//playGame function must be placed inside new game function



//player makes a choice
//computer makes a choice
//either player of computer wins
//if the game is a draw replay the round 

let playerScore = 0;
let computerScore = 0;


function game() {
    
    for (let round = 1; round <= 5; round++) {
        console.log("Round " + round);
        let result= playGame();
        console.log(result);
    }

    // After 5 rounds, determine the winner
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a draw! No overall winner.");
    }




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
game()