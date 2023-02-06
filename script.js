let computersPoints = 0;
let playersPoints = 0;
const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");
const outcome = document.querySelector("#outcome");
const playerScoreSpan = document.querySelector(".player-score");
const ComputerScoreSpan = document.querySelector(".computer-score");

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
// function capitalized(playerSelection) {
//     let lowerCase = playerSelection.toLowerCase();
//     let firstChar = lowerCase.charAt(0);
//     let removeFirstChar = lowerCase.slice(1);
//     let upperCase = firstChar.toUpperCase();
//     let putWordTogether = upperCase.concat(removeFirstChar);
    
//     playerSelection = putWordTogether;
    
//     return playerSelection;
// }

// Plays a round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
   
    //Checks the result of a round of rock, paper, scissors
       if (computerSelection === "Paper"  && playerSelection === "Rock") {
        computersPoints++
        const p = document.createElement("p");
        p.innerText = "You Lost! Paper beats Rock!";
        outcome.appendChild(p);
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        computersPoints++
        const p = document.createElement("p");
        p.innerText = "You Lost! Scissors beats Paper!";
        outcome.appendChild(p);
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computersPoints++
        const p = document.createElement("p");
        p.innerText = "You Lost! Rock beats Scissors!";
        outcome.appendChild(p);
   
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playersPoints++
        const p = document.createElement("p");
        p.innerText = "You Win! Scissors beats Paper!";
        outcome.appendChild(p);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playersPoints++
        const p = document.createElement("p");
        p.innerText = "You Win! Paper beats Rock!";
        outcome.appendChild(p);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playersPoints++
        const p = document.createElement("p");
        p.innerText = "You Win! Rock beats Scissors!";
        outcome.appendChild(p);
   
    } else if (playerSelection === computerSelection) {
        const p = document.createElement("p");
        p.innerText = "It's a tie!";
        outcome.appendChild(p);
    }    
}

function updateScores (playersPoints, computersPoints) {
    playerScoreSpan.innerText = `${playersPoints}`;
    ComputerScoreSpan.innerText = `${computersPoints}`;
}

rock.addEventListener("click", () => {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScores(playersPoints, computersPoints);
    game(playersPoints, computersPoints);

});

paper.addEventListener("click", () => {
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScores(playersPoints, computersPoints);
    game(playersPoints, computersPoints);
});

scissors.addEventListener("click", () => {
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScores(playersPoints, computersPoints);
    game(playersPoints, computersPoints);
});









//Plays a full game of rock, paper, scissors. There's 5 rounds per game. 
function game(playersPoints, computersPoints) {
  
    if (playersPoints === 5) {
        const h2 = document.createElement("h2");
       h2.innerText = `You won ${playersPoints} to ${computersPoints}!`;
       outcome.append(h2);
    } else if (computersPoints === 5) {
        const h2 = document.createElement("h2");
        h2.innerText = `You lost ${computersPoints} to ${playersPoints}!`;
        outcome.append(h2);
    } else {
        return "Tie!"
    }
    
    // let tieInPoints = 0;
    // let result = "";
    
    //Generates 5 rounds of the game.
    // for (let i = 0; i < 5; i++) {
    //     let playerSelection = prompt("Rock, paper or scissors?");
    //     playerSelection = capitalized(playerSelection);
    //     const computerSelection = getComputerChoice();
    //     result = playRound(playerSelection, computerSelection);
    //     console.log(result);
        
    //     if (result.includes("Win")) {
    //         playersPoints++;
    //     } else if (result.includes("Lose")) {
    //         computersPoints++;
    //     } else {
    //         tieInPoints++;
    //     }
        
    // }
    //Checks to see who won the game.
}

// console.log(game());

