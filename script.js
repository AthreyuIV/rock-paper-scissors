// debugger;
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber <= 3) {
        return "rock";
    }
    else if (randomNumber <= 6) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//_______________________________________________________

function getHumanChoice(returnValue) {
    if (returnValue === "rock") {
        humanSelection = "rock";
        return "rock";
    }
    else if (returnValue === "paper") {
        humanSelection = "paper";
        return "paper";
    }
    else if (returnValue === "scissors") {
        humanSelection = "scissors";
        return "scissors";
    }
}

//_______________________________________________________


const gameContainer = document.createElement("div");
document.body.appendChild(gameContainer);
gameContainer.style.display = "flex";
gameContainer.style.flexDirection = "column";
gameContainer.style.alignItems = "center";

const buttonContainer = document.createElement("div");
gameContainer.appendChild(buttonContainer);
buttonContainer.style.maxWidth = "40%";
buttonContainer.style.display = "flex";
buttonContainer.style.gap = "20px";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.padding = "20px";
buttonContainer.style.margin = "20px";
buttonContainer.style.backgroundColor = "#0F3642";
buttonContainer.style.borderRadius = "12px";

const buttonOne = document.createElement("button");
buttonContainer.appendChild(buttonOne);
buttonOne.id = "button-one";
buttonOne.textContent = "Rock";
buttonOne.style.border = "none";
buttonOne.style.paddingLeft = "23px";
buttonOne.style.paddingRight = "23px";
buttonOne.style.color = "white";
buttonOne.style.backgroundColor = "#466978";
buttonOne.style.borderRadius = "12px";
buttonOne.addEventListener("click", function () {
    let returnValue = "rock";
    getHumanChoice(returnValue);
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

const buttonTwo = document.createElement("button");
buttonContainer.appendChild(buttonTwo);
buttonTwo.id = "button-two";
buttonTwo.textContent = "Paper";
buttonTwo.style.border = "none";
buttonTwo.style.paddingLeft = "18px";
buttonTwo.style.paddingRight = "18px";
buttonTwo.style.color = "white";
buttonTwo.style.backgroundColor = "#466978";
buttonTwo.style.borderRadius = "12px";
buttonTwo.addEventListener("click", function () {
    let returnValue = "paper";
    getHumanChoice(returnValue);
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

const buttonThree = document.createElement("button");
buttonContainer.appendChild(buttonThree);
buttonThree.id = "button-three";
buttonThree.textContent = "Scissors";
buttonThree.style.border = "none";
buttonThree.style.paddingLeft = "12px";
buttonThree.style.paddingRight = "12px";
buttonThree.style.color = "white";
buttonThree.style.backgroundColor = "#466978";
buttonThree.style.borderRadius = "12px";
buttonThree.addEventListener("click", function () {
    let returnValue = "scissors";
    getHumanChoice(returnValue);
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});


//_______________________________________________________

function playRound(humanChoice, computerChoice) {
    if (humanSelection === computerSelection) {
        console.log("A tie is like a hug, it's nice, but it doesn't really solve anything.");
    }
    else if (humanSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        console.log("You lose dude, " + computerSelection + " beats " + humanSelection + ".");
    }
    else if (humanSelection === "paper" && computerSelection === "scissors") {
        //CONSOLE.LOG "You lose dude!"
        computerScore++;
        console.log("You lose dude, " + computerSelection + " beats " + humanSelection + ".");
    }
    else if (humanSelection === "scissors" && computerSelection === "rock") {
        //CONSOLE.LOG "You lose dude!"
        computerScore++;
        console.log("You lose dude, " + computerSelection + " beats " + humanSelection + ".");
    }
    else if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore++;
        console.log("You win dude, " + humanSelection + " beats " + computerSelection + ".");
    }
    else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore++;
        console.log("You win dude, " + humanSelection + " beats " + computerSelection + ".");
    }
    else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        console.log("You win dude, " + humanSelection + " beats " + computerSelection + ".");
    }
    currentRound++;
}

//__________________________________________________________________


function determineWinner() {
    if (humanScore === 5) {
        alert("Winner winner chicken dinner!");
    }
    else if (computerScore === 5) {
        alert("Tie game! Refresh the page to try again dude.")
    }
}

//_____________________________________________________________


const resultsContainer = document.createElement("div");
gameContainer.appendChild(resultsContainer);
resultsContainer.style.minWidth = "60%";
resultsContainer.style.height = "150px";
resultsContainer.style.display = "flex";
resultsContainer.style.justifyContent = "space-around";
resultsContainer.style.alignItems = "center";
resultsContainer.style.padding = "10px";
resultsContainer.style.backgroundColor = "#0F3642";
resultsContainer.style.margin = "20px";
resultsContainer.style.borderRadius = "12px";

const humanResults = document.createElement("div");
resultsContainer.appendChild(humanResults);
humanResults.style.maxHeight = "25px";
humanResults.style.paddingTop = "10px";
humanResults.style.paddingBottom = "40px";
humanResults.style.paddingLeft = "10px";
humanResults.style.paddingRight = "10px";
humanResults.style.borderRadius = "12px";
humanResults.style.backgroundColor = "#466978";

const YourScore = document.createElement("div");
humanResults.appendChild(YourScore);
YourScore.textContent = "Your Score";
YourScore.style.color = "white";
YourScore.style.fontFamily = "Arial, sans-serif";

const playerScoreBox = document.createElement("div");
humanResults.appendChild(playerScoreBox);
playerScoreBox.textContent = "0";
playerScoreBox.style.color = "white";
playerScoreBox.style.fontFamily = "Arial, sans-serif";
playerScoreBox.style.paddingTop = "10px";
playerScoreBox.style.textAlign = "center";

const roundOutcome = document.createElement("div");
resultsContainer.appendChild(roundOutcome);
roundOutcome.style.display = "flex";
roundOutcome.style.flexDirection = "column";
roundOutcome.style.alignItems = "center";
roundOutcome.style.justifyContent = "start";
roundOutcome.style.width = "50%";
roundOutcome.style.height = "150px";

const displayResults = document.createElement("div");
roundOutcome.appendChild(displayResults);
displayResults.textContent = "No, I'm Batman!";
displayResults.style.padding = "6px";
displayResults.style.borderRadius = "12px";
displayResults.style.width = "100%";
displayResults.style.backgroundColor = "#466978";
displayResults.style.textAlign = "center";
displayResults.style.color = "white";
displayResults.style.fontFamily = "Arial, sans-serif";

const computerResults = document.createElement("div");
resultsContainer.appendChild(computerResults);
computerResults.style.maxHeight = "25px";
computerResults.style.paddingTop = "10px";
computerResults.style.paddingBottom = "40px";
computerResults.style.paddingLeft = "10px";
computerResults.style.paddingRight = "10px";
computerResults.style.borderRadius = "12px";
computerResults.style.backgroundColor = "#466978";

const rivalScore = document.createElement("div");
computerResults.appendChild(rivalScore);
rivalScore.textContent = "Rival Score";
rivalScore.style.color = "white";
rivalScore.style.fontFamily = "Arial, sans-serif";

const computerScoreBox = document.createElement("div");
computerResults.appendChild(computerScoreBox);
computerScoreBox.textContent = "0";
computerScoreBox.style.color = "white";
computerScoreBox.style.fontFamily = "Arial, sans-serif";
computerScoreBox.style.paddingTop = "10px";
computerScoreBox.style.textAlign = "center";

//_____________________________________________________________

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

let computerSelection = null;
let humanSelection = null;
