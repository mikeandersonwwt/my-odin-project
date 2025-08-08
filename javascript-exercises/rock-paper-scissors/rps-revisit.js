// https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#assignment
let resultMessage = "";
const resultDiv = document.getElementById('results');
let playerScore = 0;
let computerScore = 0;
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const buttons = document.querySelectorAll('button');

function playRound(playerSelection) {
    
  playerSelection = playerSelection.toLowerCase();
  const choices = ['rock', 'paper', 'scissors'];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  resultMessage = `Computer picked: ${computerSelection}\n`;

  if (playerSelection === computerSelection){
    resultMessage += "It's a tie!";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore++;
  } else {
    computerScore++;
  }

 // Update score display
 playerScoreElement.textContent = playerScore;
 computerScoreElement.textContent = computerScore;
 
 // Check for game winner
 if (playerScore === 5) {
   resultMessage += "\n\n🎉 YOU WIN THE GAME! 🎉\nClick to play again.";
   resetGame();
 } else if (computerScore === 5) {
   resultMessage += "\n\n💻 COMPUTER WINS THE GAME! 💻\nClick to play again.";
   resetGame();
 }
 
 resultDiv.textContent = resultMessage;
}

function resetGame() {
 playerScore = 0;
 computerScore = 0;
 playerScoreElement.textContent = playerScore;
 computerScoreElement.textContent = computerScore;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
