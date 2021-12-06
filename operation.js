let gameCounter = 0;
let humanWins = 0;
let computerWins = 0;


const results = document.querySelector('#results');

const buttons = document.querySelectorAll('button');

const humanScore = document.querySelector('.userScore');

const computerScore = document.querySelector('.computerScore')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    let userAnswer = button.id;
    inputs(userAnswer);
    });
});



function endOfGame() {
    if (humanWins > computerWins) {
        alert(`Wow! You beat the computer ${humanWins} : ${computerWins}`);
    } else {
        alert(`Better luck next time! The computer beat you ${computerWins} : ${humanWins}`);
    }
    
}


function game(computerAnswer, userAnswer) {
    if (computerAnswer == userAnswer) {
        alert(`Computer also chose ${userAnswer}, result is a draw!`);
        
    }  else if (computerAnswer == 'rock' && userAnswer == 'paper') {
        alert (`Computer chose ${computerAnswer}, you win!`)
        humanWins += 1
        humanScore.textContent = `${humanWins}`;
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        }
    } else if (computerAnswer == 'rock' && userAnswer == 'scissors') {
        alert (`Computer chose ${computerAnswer}, you lose!`)
        computerWins += 1
        computerScore.textContent = `${computerWins}`;
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } 
    } else if (computerAnswer == 'paper' && userAnswer == 'scissors') {
        alert (`Computer chose ${computerAnswer}, you win!`)
        humanWins += 1
        humanScore.textContent = `${humanWins}`;
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } 
    } else if (computerAnswer == 'paper' && userAnswer == 'rock') {
        alert (`Computer chose ${computerAnswer}, you lose!`)
        computerWins += 1
        computerScore.textContent = `${computerWins}`;
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } 
    } else if (computerAnswer == 'scissors' && userAnswer == 'rock') {
        alert (`Computer chose ${computerAnswer}, you win!`)
        humanWins += 1
        humanScore.textContent = `${humanWins}`;
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } 
    } else if (computerAnswer == 'scissors' && userAnswer == 'paper') {
        alert (`Computer chose ${computerAnswer}, you lose!`)
        computerWins += 1
        computerScore.textContent = `${computerWins}`;
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } 
    }
}

function inputs(userAnswer) {
    
    let computerNum = Math.floor(Math.random() * 3) + 1;
    let computerAnswer;

    userAnswer = userAnswer;

    if (computerNum == 1) {
        computerAnswer = 'rock';
    } else if (computerNum == 2) {
        computerAnswer = 'paper';
    } else {
        computerAnswer = 'scissors'
    }

    game(computerAnswer, userAnswer);
    

}



