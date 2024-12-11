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

const buttonContainer = document.createElement("div");
document.body.appendChild(buttonContainer);
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
document.body.appendChild(resultsContainer);
resultsContainer.style.display = "flex";
resultsContainer.style.justifyContent = "space-around";
resultsContainer.style.padding = "20px";
resultsContainer.style.backgroundColor = "#0F3642";
resultsContainer.style.margin = "20px";
resultsContainer.style.borderRadius = "12px";

const humanResults = document.createElement("div");
resultsContainer.appendChild(humanResults);
humanResults.textContent = "Your Score";
humanResults.style.paddingTop = "10px";
humanResults.style.paddingBottom = "40px";
humanResults.style.paddingLeft = "10px";
humanResults.style.paddingRight = "10px";
humanResults.style.borderRadius = "12px";
humanResults.style.color = "white";
humanResults.style.backgroundColor = "#466978";
humanResults.style.fontFamily = "Arial, sans-serif";

const computerResults = document.createElement("div");
resultsContainer.appendChild(computerResults);
computerResults.textContent = "Rival Score";
computerResults.style.paddingTop = "10px";
computerResults.style.paddingBottom = "40px";
computerResults.style.paddingLeft = "10px";
computerResults.style.paddingRight = "10px";
computerResults.style.borderRadius = "12px";
computerResults.style.color = "white";
computerResults.style.backgroundColor = "#466978";
computerResults.style.fontFamily = "Arial, sans-serif";

//_____________________________________________________________

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

let computerSelection = null;
let humanSelection = null;
