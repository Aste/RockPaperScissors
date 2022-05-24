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
    };
};


let computerScore = 0;
let playerScore = 0;
let playerSelection = null;
let firstMessage = "Let the game begin, please choose; rock, paper or scissors";

// Compares the computer play to the user play and returns a string delcaring the winner
const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();
    // playerSelection = (window.prompt('Please choose; rock, paper or scissors', 'rock')).toLowerCase();
    if (playerSelection === computerSelection) {
        firstMessage = 'This round was a draw';
        divResult.innerText = `${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`
        return;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        firstMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
        divResult.innerText = `${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`
        return;
    } else {
        firstMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
        divResult.innerText = `${firstMessage} \n ${computerScore} points : Computer \n ${playerScore} points : You`
        return;
    }
};

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    playRound('rock');
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    playRound('paper');
});

const btnSciccors = document.querySelector('#btnSciccors');
btnSciccors.addEventListener('click', () => {
    playRound('scissors');
});

const body = document.body
const divResult = document.createElement("div")
divResult.innerText = `${firstMessage} \n ${computerScore} points : Commputer \n ${playerScore} points : You`
body.append(divResult)
// document.getElementsByTagName("divResult").style.marginTop = "50px";

const game = () => {
    while (playerSelection === true) {
        while (playerScore && computerScore > 5) {
            playRound()
        }
        firstMessage = "Game Over";
        break
    }
};

game()