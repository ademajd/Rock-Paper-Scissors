const rockB = document.querySelector("#rock");
const paperB = document.querySelector("#paper");
const scissorsB = document.querySelector("#scissors");
const gameWinner = document.querySelector(".game-winner")
const gameMoves = document.querySelectorAll(".move")

const winner = document.createElement("div");
winner.classList.add("winner");
gameWinner.appendChild(winner);



function getComputerChoice() {
    let rand = Math.floor(Math.random()* 10);


    if (rand <= 2) {
        return "rock";
    } else if (rand > 3 && rand < 7) {
        return "paper";
    } else {
        return "scissors";
    }
}



function getComputerInput() {
    const computerInput = getComputerChoice();
    return computerInput;
}

function playGame(playerInput) {
    getPlayer = playerInput;
    // getComputer = getComputerInput();
    getComputer = "rock";
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors"

    console.log(`Player chose : ${getPlayer} and the pc chose : ${getComputer}`);

    if(getPlayer == getComputer) {
        return "Draw";
    }

    if (getPlayer == rock) {
        if(getComputer == paper) {
            return "Computer Wins"
        } else if (getComputer == scissors) {
            return "You Win";
        }
    }

    if (getPlayer == paper) {
        if (getComputer == rock) {
            return "You Win"
        } else if (getComputer == scissors) {
            return "Computer Wins";
        }
    }

    if (getPlayer == scissors) {
        if (getComputer == paper) {
            return "You Win";
        }
        else if (getComputer == rock) {
            return "Computer Wins";
        }
        
    }
}


function playFiveRound() {
    let pcWins = 0;
    let playerWins = 0;

    gameMoves.forEach(element => {
        element.addEventListener("click",() => {
            if (winner.childNodes.length != 0) {
                gameWinner.removeChild(winner);
            }
            let roundResult = playGame(element.id);
            console.log("-----------------------");
            if (roundResult == "You Win") {
                playerWins++;
            } else if (roundResult == "Computer Wins") {
                pcWins++;
            }
            
            if (pcWins == 5) {
                winner.textContent = "pcWins";
                pcWins = 0;
                return;
            } else if (playerWins == 5) {
                winner.textContent = "playerWins";
                playerWins = 0;
                return;
            }
            
        })
    
        
    });
    
}

playFiveRound();



