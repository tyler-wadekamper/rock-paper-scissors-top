function playOneMatch() {
    let matchIsNotOver = true;
    let userComputerMatchScore = [0, 0];

    //display welcome message
    printWelcomeMessage();

    while(matchIsNotOver){
        let isUserVictory = null;
        //get the result of a game
        isUserVictory = playOneGame();
        
        //change the score of the match
        userComputerMatchScore = changeMatchScore(isUserVictory, userComputerMatchScore);
        
        matchIsNotOver = isMatchNotOver(userComputerMatchScore);

        //decide if match is over
        if (matchIsNotOver) {
            continue;
        }
        else {
            printMatchEndMessage(userComputerMatchScore);
        }
    }
}

function playOneGame(){
    let keepGoing = true;
    let isUserVictory = null;
    let userInput = null;

    while (keepGoing) {
        //get user input
        userInput = getUserInputWithMessage();
        userInputLowered = userInput.toLowerCase();

        //validate user input, decide if need to get input again
        if (isValidUserInput(userInputLowered)) {
            keepGoing = false;
        }
        else {
            printRetryUserInputMessage(userInputLowered);
        }
    }

    //generate cpu answer using a random number generator
    computerInput = generateComputerInput();

    //resolve game based on user, cpu answers
    isUserVictory = getUserVictory(userInputLowered, computerInput);
    
    printGameResult(isUserVictory, userInputLowered, computerInput);
    
    return isUserVictory;
}


function printWelcomeMessage() {
    console.log("Welcome to rock paper scissors. Your options are 'rock', 'paper', or 'scissors'. Type your answer below.");
}

function getUserInputWithMessage() {
    return prompt("Choose your weapon. Your options are 'rock', 'paper', or 'scissors'.");
}

function isValidUserInput(userInput) {
    if (userInputLowered == "rock") {}
    else if (userInputLowered == "paper") {}
    else if (userInputLowered == "scissors") {}
    else {
        return false;
    }

    return true;
}

function printRetryUserInputMessage(userInput) {
    console.log(`Your input "${userInput}" is not a valid selection.`)
}

function generateComputerInput() {
    let randomIntToTwo = Math.floor(Math.random() * 3);

    if (randomIntToTwo == 0) {
        return "rock"
    }
    else if (randomIntToTwo == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getUserVictory(userInput, computerInput) {
    if (userInput == computerInput) {
        return null;
    }
    
    if (userInput == "rock") {
        if (computerInput == "scissors") {
            return true;
        }
        if (computerInput == "paper") {}
    }
    else if (userInput == "paper") {
        if (computerInput == "rock") {
            return true;
        }
        if (computerInput == "scissors") {}
    }
    else if (userInput == "scissors") {
        if (computerInput == "paper") {
            return true;
        }
        if (computerInput == "rock") {}
    }
    
    return false;
}

function printGameResult(isUserVictory, userInput, computerInput) {
    console.log(`You played ${userInput} and the computer played ${computerInput}.`)
    
    if (isUserVictory == true) {
        console.log("Nice work! You won the game.")
    }
    else if (isUserVictory == false) {
        console.log("Tough opponent. You lost this one.")
    }
    else if (isUserVictory == null) {
        console.log("Great minds think alike. That's a draw.")
    }
}

function changeMatchScore(isUserVictory, userComputerMatchScore) {
    let newMatchScore = userComputerMatchScore;

    if (isUserVictory == true) {
        newMatchScore[0] += 1;
    }
    else if (isUserVictory == false) {
        newMatchScore[1] += 1;
    }
    else if (isUserVictory == null) {}

    return newMatchScore;
}

function isMatchNotOver(userComputerMatchScore) {
    let userScore = userComputerMatchScore[0]
    let computerScore = userComputerMatchScore[1]

    if (userScore == 5) {}
    else if (computerScore == 5) {}
    else {
        return true;
    }

    return false;
}

function printMatchEndMessage(userComputerMatchScore) {
    let userScore = userComputerMatchScore[0]
    let computerScore = userComputerMatchScore[1]

    if (userScore == 5) {
        console.log(`Great job! You beat the computer by a score of ${userScore} to ${computerScore}.`)
    }
    else if (computerScore == 5) {
        console.log(`Bummer. The computer got the best of you by a score of ${computerScore} to ${userScore}.`)
    }
}

playOneMatch();