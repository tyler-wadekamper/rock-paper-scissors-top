function playOneMatch() {
    let matchIsNotOver = true;
    let userInput = null;

    //display welcome message
    printWelcomeMessage();

    while(matchIsNotOver){
        let gameResult = null;
        let userComputerMatchScore = [0, 0];

        //get the result of a game
        gameResult = playOneGame();
        
        //change the score of the match
        userComputerMatchScore = changeMatchScore(gameResult);
        
        //decide if match is over
        if (matchIsNotOver) {
            continue;
        }
        else {
            printGameEndMessage();
        }
    }
}

function playOneGame(){
    let keepGoing = true;
        while (keepGoing) {
            //get user input
            userInput = getUserInputWithMessage();

            //validate user input, decide if need to get input again
            if (isValidUserInput(userInput)) {
                keepGoing = false;
            }
            else {
                printRetryUserInputMessage();
            }
        }

        //generate cpu answer using a random number generator
        computerInput = generateComputerInput();

        //resolve game based on user, cpu answers

}


function printWelcomeMessage() {
    console.log("Welcome to rock paper scissors. Your options are 'rock', 'paper', or 'scissors'. Type your answer below.")
}

function getUserInputWithMessage() {
    return prompt("Choose your weapon. Your options are 'rock', 'paper', or 'scissors'.")
}

function isValidUserInput() {
    userInputLowered = userInput.toLowerCase();
}

function generateComputerInput() {

}

function determineMatchOutcome() {

}

function updateMatchScore() {

}

function matchIsOver() {

}

function printGameEndMessage() {

}