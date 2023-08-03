function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound() {
    const playerSelection = prompt('Choose your weapon:').toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    }
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return "You lost! Paper beats rock"; 
        }
        return "You won! Rock beats scissors";
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return "You lost! Scissors beat paper"; 
        }
        return "You won! Paper beats rock";
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return "You lost! Rock beats scissors"; 
        }
        return "You won! Scissors beat paper";
    }
}

function game() {
    
}