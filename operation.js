let gameCounter = 0;
let humanWins = 0;
let computerWins = 0;
let acceptedAnswers = ['rock', 'paper', 'scissors']


function endOfGame() {
    if (humanWins > computerWins) {
        alert(`Wow! You beat the computer ${humanWins} : ${computerWins}`);
    } else {
        alert(`Better luck next time! The computer beat you ${computerWins} : ${humanWins}`);
    }
    wannaPlay()
}


function game(computerAnswer, userAnswer) {
    if (computerAnswer == userAnswer) {
        alert(`Computer also chose ${userAnswer}, result is a draw!`);
        inputs();
    }  else if (computerAnswer == 'rock' && userAnswer == 'paper') {
        alert (`Computer chose ${computerAnswer}, you win!`)
        humanWins += 1
        alert (`Current score is you: ${humanWins}, computer: ${computerWins}`);
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } else {
            inputs()
        }
    } else if (computerAnswer == 'rock' && userAnswer == 'scissors') {
        alert (`Computer chose ${computerAnswer}, you lose!`)
        computerWins += 1
        alert (`Current score is you: ${humanWins}, computer: ${computerWins}`);
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } else {
            inputs()
        } 
    } else if (computerAnswer == 'paper' && userAnswer == 'scissors') {
        alert (`Computer chose ${computerAnswer}, you win!`)
        humanWins += 1
        alert (`Current score is you: ${humanWins}, computer: ${computerWins}`);
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } else {
            inputs()
        }
    } else if (computerAnswer == 'paper' && userAnswer == 'rock') {
        alert (`Computer chose ${computerAnswer}, you lose!`)
        computerWins += 1
        alert (`Current score is you: ${humanWins}, computer: ${computerWins}`);
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } else {
            inputs()
        }
    } else if (computerAnswer == 'scissors' && userAnswer == 'rock') {
        alert (`Computer chose ${computerAnswer}, you win!`)
        humanWins += 1
        alert (`Current score is you: ${humanWins}, computer: ${computerWins}`);
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } else {
            inputs()
        }
    } else if (computerAnswer == 'scissors' && userAnswer == 'paper') {
        alert (`Computer chose ${computerAnswer}, you lose!`)
        computerWins += 1
        alert (`Current score is you: ${humanWins}, computer: ${computerWins}`);
        gameCounter += 1
        if (gameCounter == 3) {
            endOfGame()
        } else {
            inputs()
        }
    }
}

function inputs() {
    
    let computerNum = Math.floor(Math.random() * 3) + 1;
    let computerAnswer;

    if (computerNum == 1) {
        computerAnswer = 'rock';
    } else if (computerNum == 2) {
        computerAnswer = 'paper';
    } else {
        computerAnswer = 'scissors'
    }

    let userAnswer = prompt("Choose: rock, paper or scissors")
    userAnswer = userAnswer.toLowerCase()
    console.log(userAnswer)
    if (userAnswer != 'rock' && userAnswer != 'paper' && userAnswer != 'scissors') {
        console.log("Not an acceptable answer");
        inputs();
    } else {
        game(computerAnswer, userAnswer);
    }

}

function wannaPlay () {
    let play = prompt("Do you want to play rock paper scissors? y/n");

    if (play == 'y') {
        inputs()
    }
    else if (play == 'n') {
        let sure = prompt ("Are you sure? y/n");
        if (sure == 'y') {
            alert ("OK reload the page if you change your mind");
        } else if (sure == 'n') {
            wannaPlay()
        } else {
            alert("That's not an accepted answer! Reload the page and try again");
        }
    } else {
        alert("That's not an accepted answer! Reload the page and try again");
    }
}

wannaPlay()

