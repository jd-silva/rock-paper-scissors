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
    if (playerChoice === "rock" && computerChoice === "paper") {
        return "You loose! Paper beats rock.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You loose! Scissors beats paper.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats paper.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You loose! Rock beats scissors.";
    } else if (playerChoice === computerChoice) {
        return "Its a draw!";
    }
}

console.log(playGame("paper", "paper"));