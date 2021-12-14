//This file implements the logic and user interface interaction.

function playOneGame(mouseClickEvent) {
    let isUserVictory = null;
    let userInput = mouseClickEvent.target.dataset.optionType;

    computerInput = generateComputerInput();

    isUserVictory = getUserVictory(userInput, computerInput);

    changeMatchScore(isUserVictory);

    printGameResult(isUserVictory, userInput, computerInput);

    winner = getWinner();

    if (winner == null) {
        incrementRound();
    }
    else {
        removeButtonEventListeners();
        displayMatchEndMessage(winner);
        replayButton = initReplayButton();
    }
}

function getWinner() {
    let userScoreNum = getUserScoreNum();
    let cpuScoreNum = getCpuScoreNum();
    let winner = null;

    if (userScoreNum == 5) {
        winner = "user";
    }
    else if (cpuScoreNum == 5) {
        winner = "cpu";
    }

    return winner;
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
    let resultMessageDiv = document.querySelector('.result-message');
    let winner = getWinner();

    resultMessageDiv.innerText = `You played ${userInput} and the computer played ${computerInput}.`;
    
    if (winner == null){
        if (isUserVictory == true) {
            resultMessageDiv.innerText += " Nice work! You won.";
        }
        else if (isUserVictory == false) {
            resultMessageDiv.innerText += " Tough opponent. You lost this one.";
        }
        else if (isUserVictory == null) {
            resultMessageDiv.innerText += " Great minds think alike. That's a draw.";
        }
    }
}

function changeMatchScore(isUserVictory) {
    let userScoreDiv = getUserScoreDiv();
    let cpuScoreDiv = getCpuScoreDiv();

    let userScoreNum = getUserScoreNum();
    let cpuScoreNum = getCpuScoreNum();

    if (isUserVictory == true) {
        userScoreNum += 1;
        userScoreDiv.innerText = userScoreNum;
    }
    else if (isUserVictory == false) {
        cpuScoreNum += 1;
        cpuScoreDiv.innerText = cpuScoreNum;
    }
    else if (isUserVictory == null) {
        incrementDrawScore();
    }
}

function displayMatchEndMessage(winner) {
    let resultMessageDiv = document.querySelector('.result-message');

    if (winner == "user") {
        resultMessageDiv.innerText += ` Way to go, you beat the computer!`;
    }
    else if (winner == "cpu") {
        resultMessageDiv.innerText += ` Darn, the computer got the best of you this time.`;
    }
}

function addButtonEventListeners() {
    let optionButtons = document.querySelectorAll(".option-button");

    optionButtons.forEach(addButtonClickEventListener);
}

function addButtonClickEventListener(button) {
    button.addEventListener('click', playOneGame);
}

function getUserScoreDiv() {
    let userScoreDiv = document.querySelector('.user-score');
    return userScoreDiv;   
}

function getCpuScoreDiv() {
    let cpuScoreDiv = document.querySelector('.cpu-score');
    return cpuScoreDiv;
}

function getUserScoreNum() {
    let userScoreDiv = document.querySelector('.user-score');
    let userScoreNum = Number(userScoreDiv.innerText);
    return userScoreNum;   
}

function getCpuScoreNum() {
    let cpuScoreDiv = document.querySelector('.cpu-score');
    let cpuScoreNum = Number(cpuScoreDiv.innerText);
    return cpuScoreNum;
}

function initReplayButton() {
    replayButton = addReplayButtonToDom();
    addReplayButtonClickListener(replayButton);

    return replayButton;
}

function addReplayButtonToDom () {
    let replayButton = document.createElement('button');
    replayButton.classList.add('replay-button');
    replayButton.innerText = 'Play Again';

    let buttonContainerDiv = document.querySelector('.replay-button-container');
    buttonContainerDiv.append(replayButton);

    return replayButton;
}

function removeReplayButton() {
    let replayButton = document.querySelector('.replay-button');
    replayButton.remove();
}

function removeButtonEventListeners() {
    let optionButtons = document.querySelectorAll(".option-button");

    optionButtons.forEach(removeButtonEventListener);
}

function removeButtonEventListener(button) {
    button.removeEventListener('click', playOneGame);
}

function addReplayButtonClickListener(replayButton) {
    replayButton.addEventListener('click', resetGame)
}

function resetGame(event) {
    resetScoreBoard();
    clearResultMessage();
    removeReplayButton();
    addButtonEventListeners();
}

function resetScoreBoard() {
    setUserScore(0);
    setCpuScore(0);
    setDrawScore(0);
    setRound(1);
}

function clearResultMessage() {
    let resultMessageDiv = document.querySelector('.result-message');
    resultMessageDiv.innerText = "";
}

function setUserScore(scoreNumber) {
    let userScoreDiv = getUserScoreDiv();
    userScoreDiv.innerText = scoreNumber;
}

function setCpuScore(scoreNumber) {
    let cpuScoreDiv = getCpuScoreDiv();
    cpuScoreDiv.innerText = scoreNumber;
}

function setRound(roundNumber) {
    let roundDiv = document.querySelector('.round');
    let roundText = `Round ${roundNumber}`;
    roundDiv.dataset.round = roundNumber;
    roundDiv.innerText = roundText;
}

function incrementRound() {
    let roundDiv = document.querySelector('.round');
    let roundNumber = Number(roundDiv.dataset.round);
    roundNumber += 1;
    roundDiv.dataset.round = roundNumber;
    setRound(roundNumber);
}

function incrementDrawScore () {
    let drawDiv = document.querySelector('.draw-score');
    let drawScore = Number(drawDiv.innerText);
    drawScore += 1;
    setDrawScore(drawScore);
}

function setDrawScore(drawNumber) {
    let drawDiv = document.querySelector('.draw-score');
    drawDiv.innerText = drawNumber;
}

addButtonEventListeners();