function  getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1 ){
        return "Rock" ;
    }
    else if (randomNumber === 2){
        return "Paper" ;
    }
    else{
        return "Scissors" ;
    }
}

function getUserChoice() {
    let userChoice = prompt("Please enter Rock, Paper or Scissors!") 
    return userChoice.trim().charAt(0).toUpperCase() + userChoice.trim().substring(1).toLocaleLowerCase();
}

function playRound(userSelection, computerSelection) {
    
    if (userSelection !== "Rock" && userSelection !== "Paper" && userSelection !== "Scissors" ) {    
        userScore += 0;
        computerScore += 0;
        return `Invalid user selection. Please choose 'rock', 'paper', or 'scissors'.
            Result : User: ${userScore} vs Computer: ${computerScore}`;
    }

    else {
        if(userSelection === computerSelection ) {
            userScore += 1;
            computerScore += 1;
            return `It's a tie!
        Result : User: ${userScore} vs Computer: ${computerScore}`
        }  
        else if (
            (userSelection === "Rock" && computerSelection === "Paper") ||
            (userSelection === "Paper" && computerSelection === "Scissors") ||
            (userSelection === "Scissors" && computerSelection === "Rock")
        ) {
            computerScore += 1;
            return `You LOSE! ${computerSelection} beats ${userSelection}
            Result : User: ${userScore} vs Computer: ${computerScore}` ;
        }
        else {
            userScore += 1;
            return `You WIN! ${userSelection} beats ${computerSelection}
            Result : User: ${userScore} vs Computer: ${computerScore}`;
        }
    }
}

let userScore = 0;
let computerScore = 0;
