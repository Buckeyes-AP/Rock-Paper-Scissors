function getComputerChoice() {
    let randomSelector = Math.floor(Math.random() * 3) + 1;
    
    if (randomSelector == 1 ) {
        return "Rock";
    } else if (randomSelector == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

function playRound(playerSelection, computerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    let firstChar = lowerCase.charAt(0);
    let removeFirstChar = lowerCase.slice(1);
    let upperCase = firstChar.toUpperCase();
    let putWordTogether = upperCase.concat(removeFirstChar);
    playerSelection = putWordTogether;

       if (computerSelection == "Paper"  && playerSelection == "Rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        return "You Lose! Rock beats Scissors"
   
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
   
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "It's a tie!";
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "It's a tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "It's a tie!";
    }


    
}

function game() {
  
    let computersPoints = 0;
    let playersPoints = 0;
    let tieInPoints = 0;
    let result = "";
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?");
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result.includes("Win")) {
            playersPoints++;
        } else if (result.includes("Lose")) {
            computersPoints++;
        } else {
            tieInPoints++;
        }
        
    }
    if (playersPoints > computersPoints) {
        return "Winner!"
    } else if (computersPoints > playersPoints) {
        return "Loser!"
    } else {
        return "Tie!"
    }
}

console.log(game());

