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

//player makes a choice
//computer makes a choice
//either player of computer wins
//if the game is a draw replay the round 

function playGame(playerChoice, computerChoice) {

    let playerChoiceLower = playerChoice.toLowerCase();
    let computerChoiceLower = computerChoice.toLowerCase();

    if (playerChoiceLower === "rock" && computerChoiceLower === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerChoiceLower === "rock" && computerChoiceLower === "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerChoiceLower === "paper" && computerChoiceLower === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerChoiceLower === "paper" && computerChoiceLower === "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerChoiceLower === "scissors" && computerChoiceLower === "paper") {
        return "You win! Scissors beats paper.";
    } else if (playerChoiceLower === "scissors" && computerChoiceLower === "rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerChoiceLower === computerChoiceLower) {
        return "Its a draw!";
    }
}

console.log(playGame("ROCK", "Paper"));