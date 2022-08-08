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
function getPlayerInput() {
    const playerInput = prompt("Let´s play rock paper scissors. Which one do you chose?").toLowerCase();
    return playerInput;
}


function getComputerInput() {
    const computerInput = getComputerChoice();
    return computerInput;
}

function playGame() {
    getPlayer = getPlayerInput();
    getComputer = getComputerInput();
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors"

    console.log(`Player chose : ${getPlayer} and the pc chose : ${getComputer}`);

    if(getPlayer == getComputer) {
        return "Draw";
    }

    if (getPlayer == rock) {
        if(getComputer == paper) {
            return "computer wins"
        } else if (getComputer == scissors) {
            return "You Wins";
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
            return "Computer wins";
        }
        
    }
}


function game() {
    for (let index = 0; index < 5; index++) {
        console.log(playGame());
    }
}


game();