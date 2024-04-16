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
        return "Invalid user selection. Please choose 'rock', 'paper', or 'scissors'.";
    }

    else {
        if(userSelection === computerSelection ) {
            return "It's a tie!"
        }  
        else if (
            (userSelection === "Rock" && computerSelection === "Paper") ||
            (userSelection === "Paper" && computerSelection === "Scissors") ||
            (userSelection === "Scissors" && computerSelection === "Rock")
        ) {
            return `You LOSE! ${computerSelection} beats ${userSelection}` ;
        }
        else {
            return `You WIN! ${userSelection} beats ${computerSelection}` ;
        }
    }
}