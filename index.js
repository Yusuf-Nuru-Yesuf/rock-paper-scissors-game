let userScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => handleUserSelection("Rock"));
paper.addEventListener("click", () => handleUserSelection("Paper"));
scissors.addEventListener("click", () => handleUserSelection("Scissors"));

const scoreDisplay = document.querySelector("#result h1");
const messageDisplay = document.querySelector("#result p");

function  getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 );
    if (randomNumber === 0 ){
        return "Rock" ;
    }
    else if (randomNumber === 1){
        return "Paper" ;
    }
    else{
        return "Scissors" ;
    }
}

function handleUserSelection(userChoice) {
    
    const userSelection = userChoice;
    const computerSelection = getComputerChoice();
    
    const resultText = playRound(userSelection, computerSelection);
    messageDisplay.textContent = resultText;
    updateScore();

}

function playRound(userSelection, computerSelection) {
    
    if (userSelection !== "Rock" && userSelection !== "Paper" && userSelection !== "Scissors" ) {    
        return `Invalid user selection. Please choose 'rock', 'paper', or 'scissors'.
            Result : User: ${userScore} vs Computer: ${computerScore}`;
    }

    else {
        if(userSelection === computerSelection ) {
            return `It's a tie! Both selected ${userSelection}`
        }  
        else if (
            (userSelection === "Rock" && computerSelection === "Paper") ||
            (userSelection === "Paper" && computerSelection === "Scissors") ||
            (userSelection === "Scissors" && computerSelection === "Rock")
        ) {
            computerScore += 1;
            return `You LOSE! ${computerSelection} beats ${userSelection}`
        }
        else {
            userScore += 1;
            return `You WIN! ${userSelection} beats ${computerSelection}`
        }
    }
}

function updateScore() {
    scoreDisplay.textContent = `User: ${userScore} vs Computer: ${computerScore}`;
}