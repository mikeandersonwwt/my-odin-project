// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment

function playGame(){
  console.log("************* ROCK PAPER SCISSORS *************");
 
  function getComputerChoice(){
    const randomNumber = Math.random(); // random number between 0 (inclusive) and 1 (exclusive)
  
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice(){
    let humanChoice = prompt('Please enter Rock, Paper, or Scissors'); 
    return humanChoice;
  }

  let humanScore = 0;
  let computerScore = 0;      
        
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
      console.log("It's a tie!");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);    
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("GAME " + (i + 1));
    console.log('You picked: ' + humanSelection + ' <=> Computer picked: ' + computerSelection);
    playRound(humanSelection, computerSelection);
    console.log('Your score: ' + humanScore + ' <=> Computer score: ' + computerScore);
  }

  if (humanScore > computerScore) {
    console.log('YOU WON!');
  } else if (humanScore < computerScore) {
    console.log('Sorry computer wins!');
  } else {
    console.log("It's a tie!");
  }
}