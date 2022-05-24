let computerScore = 0;
let playerScore = 0;
let playerSelection = null;
let firstMessage = "Let the game begin, please choose; rock, paper or scissors";


// Input buttons for player choice and game initialization
const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    playRound('rock');
})

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    playRound('paper');
});

const btnSciccors = document.querySelector('#btnSciccors');
btnSciccors.addEventListener('click', () => {
    playRound('scissors');
})


// Generate a random computer choice for Rock Paper Scissors
const computerPlay = () => {
    let comChoice = Math.floor(Math.random() * 3);
    // console.log(comChoice);
    if (comChoice === 0) {
        // console.log('The computerPlay was rock');
        return 'rock';
    } else if (comChoice === 1) {
        // console.log('The computerPlay was paper');
        return 'paper';
    } else {
        // console.log('The computerPlay was scissors');
        return 'scissors';
    }
}

const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();
    // playerSelection = (window.prompt('Please choose; rock, paper or scissors', 'rock')).toLowerCase();
    if (playerSelection === computerSelection) {
        firstMessage = 'This round was a draw';
        divResult.innerText = `${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore += 1;
        firstMessage = `You lost this round! ${computerSelection} beats ${playerSelection}`;
        divResult.innerText = `${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`
        if (computerScore === 5) {
            firstMessage = `Game over! The Computer won with 5 points. To start a new game please choose; rock, paper or scissors`;
            divResult.innerText = `${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`;
            console.log(firstMessage);
            console.log(computerScore);
            computerScore = 0;
            playerScore = 0;
            playerSelection = null;
        }
    } else {
        playerScore += 1;
        firstMessage = `You won this round! ${playerSelection} beats ${computerSelection}`;
        divResult.innerText = `${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`
        if (playerScore === 5) {
            firstMessage = `Game over! You won with 5 points. To start a new game please choose; rock, paper or scissors`;
            divResult.innerText = `${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`;
            console.log(firstMessage);
            console.log(computerScore);
            computerScore = 0;
            playerScore = 0;
            playerSelection = null;
        }
    }
}


// Add scoreboard and game inital messesage
const body = document.body
const divResult = document.createElement("div");
divResult.innerText = (`${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`);
body.append(divResult);