
// console.log("Hello World");
// generate a random computer choice for Rock Paper Scissors
const computerPlay = () => {
    let comChoice = Math.floor(Math.random() * 3);
    console.log(comChoice);
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

// Compares the computer play to the user play and returns a string delcaring the winner
const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();
    // playerSelection = (window.prompt('Please chooce; rock, paper or scissors', 'rock')).toLowerCase();
    if (playerSelection === computerSelection) {
        console.log('This round was a draw');
        return 'This round was a draw';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return `You Win! ${playerSelection} beats ${computerSelection}`;
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
        playRound('sciccors');
});




// const game = () => {
// // for (let i = 0; i < 5; i++){
//     //     playRound()
//     // }
// };
// 
// game()