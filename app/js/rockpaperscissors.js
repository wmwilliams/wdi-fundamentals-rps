////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if(move === 'scissors') {
        var move = 'scissors';
    } else if( move === 'rock') {
        var move === 'rock';
    } else if( move === 'paper') {
        var move === 'rock';
    } else {
        getInput()
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    if(move === 'scissors') {
        var move = 'scissors';
    } else if( move === 'rock') {
        var move === 'rock';
    } else if( move === 'paper') {
        var move === 'rock';
    } else {
        randomPlay()
    }
    return move
}

function getWinner(playerMove,computerMove) {
    var winner;
        // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        var winner = 'tie';
    } else if (playerMove ==='rock' && computerMove === 'paper') {
        var winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        var winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        var winner = 'computer';
    } else if (playerMove ==='scissors' && computerMove === 'paper') {
        var winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        var winner = 'player';
    } else if (playerMove ==='rock' && computerMove ==='scissors') {
        var winner = 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins !== 5 || computerWins !== 5) {
        var winner = getWinner(getPlayerMove(), getComputerMove());
        if (winner === 'player') {
            playerWins++;
        } else if (winner === 'computer') {
            computerWins++;
        }
        console.log("It looks like the score is " + playerWins + " to " + computerWins + "!")
        if (playerWins === 5) {
            console.log("It looks like player 1 won this round!")
        } else if (computerWins === 0) {
            console.log("It looks like the computer won this round!")
        }

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

