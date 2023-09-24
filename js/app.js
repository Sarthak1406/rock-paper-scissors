function getComputerChoice() {
    let x = Math.random();
    if (x < 1/3) {
        return "rock";
    }   else if (x >= 1/3 && x < 2/3) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw! play again"
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock"
        } else if (computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper"
        }
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock"
        } else if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        }
    } else {
        return "Incorrect input!"
    }
}

function game(){
    let score = 0;
    for (let i = 0; i < 5; i++){
        console.log(`------------------Round ${i+1}------------------`)
        playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()
        computerSelection = getComputerChoice();
        console.log (`Player selection is ${playerSelection}`);
        console.log (`Computer selection is ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result == "You Win! Paper beats Rock" || 
            result == "You Win! Rock beats Scissors" || 
            result == "You Win! Scissors beats Paper") {
            score++;
        } else if (result == "You Lose! Scissors beats Paper"|| 
                   result == "You Lose! Paper beats Rock"|| 
                   result == "You Lose! Rock beats Scissors") {
                   score--;
        } else {i--;}
        console.log(`Score is ${score}`);
    }
    if (score>0){
        return "You Win!"
    } else if (score<0){
        return "You Lose!"
    }
}

// playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()

// computerSelection = getComputerChoice();

// console.log(playerSelection)

// console.log(computerSelection)

console.log(game())



