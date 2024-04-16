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
    return userChoice.charAt(0).toUpperCase() + userChoice.substring(1).toLocaleLowerCase();
}

function playRound(userSelection, computerSelection) {

}