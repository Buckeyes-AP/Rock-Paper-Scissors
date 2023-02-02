// Computer chooses rock, paper or scissors
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

 //Takes players input and makes sure the first letter of the input is capitalized. Example "Rock".
function capitalized(playerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    let firstChar = lowerCase.charAt(0);
    let removeFirstChar = lowerCase.slice(1);
    let upperCase = firstChar.toUpperCase();
    let putWordTogether = upperCase.concat(removeFirstChar);
    
    playerSelection = putWordTogether;
    
    return playerSelection;
}

// Plays a round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
   
    //Checks the result of a round of rock, paper, scissors
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

//Plays a full game of rock, paper, scissors. There's 5 rounds per game. 
function game() {
  
    let computersPoints = 0;
    let playersPoints = 0;
    let tieInPoints = 0;
    let result = "";
    
    //Generates 5 rounds of the game.
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        playerSelection = capitalized(playerSelection);
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
    //Checks to see who won the game.
    if (playersPoints > computersPoints) {
        return "Winner!"
    } else if (computersPoints > playersPoints) {
        return "Loser!"
    } else {
        return "Tie!"
    }
}

console.log(game());

