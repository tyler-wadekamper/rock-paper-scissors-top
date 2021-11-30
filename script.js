function playOneGame() {
    let matchIsNotOver = true;
    let userInput = null;

    //display welcome message
    displayWelcomeMessage();

    //while match not over
    while(matchIsNotOver){
        //get user input
        userInput = getUserInput();

        //validate user answer
        userInputLowered = userInput.toLowerCase();

        //generate cpu answer using a random number generator
        

        //resolve game based on user, cpu answers
        
        //change the score of the match
        
        //decide if match is over
    }
}

function displayWelcomeMessage() {
    console.log("Welcome to rock paper scissors. Your options are 'rock', 'paper', or 'scissors'. Type your answer below.")
}

function getUserInput() {
    return prompt("Choose your weapon. Your options are 'rock', 'paper', or 'scissors'.")
}

function isValidUserInput() {

}

function generateComputerInput() {

}

function determineMatchOutcome(userInput, computerInput) {
    let userVictory = null;

    if (userInput == computerInput) {
        
    }

    elif (userInput == "rock") {

    }

}

function updateMatchScore() {

}

function matchIsOver() {

}