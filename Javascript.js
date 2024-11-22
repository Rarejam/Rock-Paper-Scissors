// The Rock Paper scissors project
// creat an array of the listed values which arr rock paper and scissors
// Create a function that will get the computer choice
//using Math.random() and Maths.floor,allow the computer to choose randomly between...
// the values in the array....
const options = ['rock','paper','scissors'];
function getComputerChoice(){
     const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
getComputerChoice();
// Use the if statement to detetermine the correct values of the player's choice and the Computer's choice....
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'tie'
    }else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') 
    ) {
        return 'player' 
    }else {
        return 'computer'
    }
}
// Create a function that represents  each rounds of the Game...
// which also determines the winner and the looser
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection,computerSelection)
    if(result == 'tie'){
        return 'Its a tie'
    }else if(result == 'player'){
        return `you won! ${playerSelection} beats ${computerSelection}`
    }else {
        return `you lose! ${computerSelection} beats ${playerSelection}`
    }
}
//Create a while loop which will determine if the game should countine or repeat itself.... 
// Create an input bar using the prompt function
function getPlayerChoice() {
    let validatedInput = false
    while(validatedInput == false){
    const choice = prompt('rock paper scissors')
        if(choice == null){
            continue;
            }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
            }
        }
    }
// Create the main and final function which is the game function which includes....
// ...all the of the Game and the Scoreboard to determine the winner and looser

function game() {
    let scorePlayer = 0
    let scoreComputer = 0
console.log('Welocome')
    for(let i = 0;i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log('-----------')
        if(checkWinner(playerSelection,computerSelection) == 'player'){
            scorePlayer++;
        }else if(checkWinner(playerSelection,computerSelection) == 'computer'){
            scoreComputer++
        }
    }
    console.log('Game Over')
    if(scorePlayer > scoreComputer) {
        console.log('Player was the winner') 
    }else if (scorePlayer < scoreComputer){
        console.log('Computer was the winner')
    }else{
        'It was a tie'
    }
}
game()
// The end of Rock,Paper, scissors project Game.....