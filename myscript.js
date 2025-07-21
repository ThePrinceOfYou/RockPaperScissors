const selectRock = document.querySelector('#selectRock');
const selectPaper = document.querySelector('#selectPaper');
const selectScissors = document.querySelector('#selectScissors');
const output = document.querySelector('#output');
const score = document.querySelector('#score');

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(choices.length * Math.random())];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "Draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper";

    }
}

selectRock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    output.textContent = playRound('rock', computerSelection);
    currentScore();
});

selectPaper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    output.textContent = playRound('paper', computerSelection);
    currentScore();
});

selectScissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    output.textContent = playRound('scissors', computerSelection);
    currentScore();
});


function currentScore() {
    score.textContent = "Player: " + playerScore + " : Computer: " + computerScore;
    if (playerScore == 5) {
        output.textContent = "Game Over! You Win!"
        disableButtons();
    } else if (computerScore == 5) {
        output.textContent = "Game Over! You Lose!"
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("selectRock").disabled = true;
    document.getElementById("selectPaper").disabled = true;
    document.getElementById("selectScissors").disabled = true;
}

