// The Rock Paper scissors project
// create an array of the listed values which arr rock paper and scissors
// Create a function that will get the computer choice
//using Math.random() and Maths.floor,allow the computer to choose randomly between...
// the values in the array....

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameWinner = '';
  const options = ['rock', 'paper', 'scissors'];
  function computerPlay() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
  }
  const rockButton = document.querySelector('.rock');
  const paperButton = document.querySelector('.paper');
  const scissorsButton = document.querySelector('.scissors');
  const outcomeDiv = document.querySelector('.outcome');
  const playerScoreSpan = document.querySelector('.player-score');
  const computerScoreSpan = document.querySelector('.computer-score');
  computerPlay();

  // Use the if statement to determine the correct values of the player's choice and the Computer's choice....
  function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return 'tie';
    } else if (
      (playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
      return 'player';
    } else {
      return 'computer';
    }
  }
  function updateScore(playerScore, computerScore) {
    playerScoreSpan.innerText = `Player score:
  ${playerScore}`;
    computerScoreSpan.innerText = `Computer Score:
    ${computerScore}`;
  }
  // Create a function that represents  each rounds of the Game...
  // which also determines the winner and the looser
  function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'tie') {
      const p = document.createElement('p');
      p.innerText = `Its a tie!you both picked ${playerSelection}`;
      outcomeDiv.appendChild(p);
    } else if (result == 'player') {
      playerScore++;
      const p = document.createElement('p');
      p.innerText = `you won! ${playerSelection} beats ${computerSelection}`;
      outcomeDiv.appendChild(p);
    } else {
      computerScore++;
      const p = document.createElement('p');
      p.innerText = `you lose! ${computerSelection} beats ${playerSelection}`;
      outcomeDiv.appendChild(p);
    }
  }
  rockButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
  });
  rockButton.addEventListener('click', () => {
    setTimeout(() => {
      result.clear();
    }, 2000);
  });
  paperButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
  });
  scissorsButton.addEventListener('click', () => {
    computerSelection = computerPlay();
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
  });
  function checkForWinner(playerScore, computerScore) {
    if (playerScore === 5) {
      const h2 = document.createElement('h2');
      h2.classList.add('player-won');
      h2.textContent = 'You won great job beating the computer';
      outcomeDiv.appendChild(h2);
    } else if (computerScore === 5) {
      const h2 = document.createElement('h2');
      h2.classList.add('computer-won');
      h2.textContent = `You lost ${playerScore} to ${computerScore} bad job beating the computer`;
      outcomeDiv.appendChild(h2);
    }
  }
}
game();
// The end of Rock,Paper, scissors project Game...
