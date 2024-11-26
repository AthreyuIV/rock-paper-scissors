// debugger;
// Create FUNCTION named getComputerChoice
function getComputerChoice() {
    // Create a const called randomNumber = Math.floor(Math.random() * 10)
    const randomNumber = Math.floor(Math.random() * 10);
    // IF randomNumber is <= 3 ... "rock"
    if (randomNumber <= 3) {
        return "rock";
    }
    // ELSE IF random number is <= 6 ... "paper"
    else if (randomNumber <= 6) {
        return "paper";
    }
    // ELSE ... "scissors"
    else {
        return "scissors";
    }
}

//______________________________________________________

// Create FUNCTION named getHumanChoice
function getHumanChoice() {
    // Create a CONST called userInput using window.prompt
    let userInput = prompt("Rock, paper, or scissors?");
    // IF userInput = rock ... "rock"
    if (userInput.toLowerCase() === "rock") {
        return "rock";
    }
    // ELSE IF userInput = paper ... "paper"
    else if (userInput.toLowerCase() === "paper") {
        return "paper";
    }
    // ElSE IF userInput = scissors ... "scissors"
    else if (userInput.toLowerCase() === "scissors") {
        return "scissors";
    }
    // ELSE "You'll never be Chuck Norris with that attitude."
    else {
        console.log("You'll never be Chuck Norris with that attitude.");
    }
}

//_______________________________________________________

function playGame() {

    // Create a FUNCTION named playRound (humanChoice, computerChoice)
    function playRound(humanChoice, computerChoice) {
        // IF humanSelection === computerSelection
        if (humanSelection === computerSelection) {
            //CONSOLE.LOG "A tie is like a hug, it's nice, but it doesn't really solve anything."
            console.log("A tie is like a hug, it's nice, but it doesn't really solve anything.");
        }
        // ELSE IF humanSelection === "rock" &&  computerSelection === "paper"
        else if (humanSelection === "rock" && computerSelection === "paper") {
            //CONSOLE.LOG "You lose dude!"
            computerScore++;
            console.log("You lose dude, " + computerSelection + " beats " + humanSelection + ".");
        }
        // ELSE IF humanSelection === "paper" && computerSelection === "scissors"
        else if (humanSelection === "paper" && computerSelection === "scissors") {
            //CONSOLE.LOG "You lose dude!"
            computerScore++;
            console.log("You lose dude, " + computerSelection + " beats " + humanSelection + ".");
        }
        // ELSE IF humanSelection === "scissors" && computerSelection === "rock"
        else if (humanSelection === "scissors" && computerSelection === "rock") {
            //CONSOLE.LOG "You lose dude!"
            computerScore++;
            console.log("You lose dude, " + computerSelection + " beats " + humanSelection + ".");
        }
        // ELSE IF humanSelection === "rock" && computerSelection ==="scissors"
        else if (humanSelection === "rock" && computerSelection === "scissors") {
            //CONSOLE.LOG "You win dude!"
            humanScore++;
            console.log("You win dude, " + humanSelection + " beats " + computerSelection + ".");
        }
        // ELSE IF humanSelection === "paper" && computerSelection === "rock"
        else if (humanSelection === "paper" && computerSelection === "rock") {
            //CONSOLE.LOG "You win dude!"
            humanScore++;
            console.log("You win dude, " + humanSelection + " beats " + computerSelection + ".");
        }
        // ELSE IF humanSelection === "scissors" && computerSelection === "paper"
        else if (humanSelection === "scissors" && computerSelection === "paper") {
            //CONSOLE.LOG "You win dude!"
            humanScore++;
            console.log("You win dude, " + humanSelection + " beats " + computerSelection + ".");
        }
        currentRound++;
    }

    const buttonContainer = document.createElement("div");
        document.body.appendChild(buttonContainer);
            buttonContainer.style.display = "flex";
            buttonContainer.style.gap = "20px";
            buttonContainer.style.justifyContent = "center";
            buttonContainer.style.padding = "20px";
            buttonContainer.style.backgroundColor = "#0F3642";
            

    const buttonOne = document.createElement("button");
        buttonOne.textContent = "Rock";
        buttonOne.style.border = "none";
        buttonOne.style.paddingLeft = "23px";
        buttonOne.style.paddingRight = "23px";
        buttonOne.style.color = "white";
        buttonOne.style.backgroundColor = "#466978";
        buttonOne.style.borderRadius = "12px";
    buttonContainer.appendChild(buttonOne);
    buttonOne.addEventListener("click", getHumanChoice);
    const buttonTwo = document.createElement("button");
        buttonTwo.textContent = "Paper";
        buttonTwo.style.border = "none";
        buttonTwo.style.paddingLeft = "18px";
        buttonTwo.style.paddingRight = "18px";
        buttonTwo.style.color = "white";
        buttonTwo.style.backgroundColor = "#466978";
        buttonTwo.style.borderRadius = "12px";
    buttonContainer.appendChild(buttonTwo);
    buttonTwo.addEventListener("click", getHumanChoice);
    const buttonThree = document.createElement("button");
        buttonThree.textContent = "Scissors";
        buttonThree.style.border = "none";
        buttonThree.style.paddingLeft = "12px";
        buttonThree.style.paddingRight = "12px";
        buttonThree.style.color = "white";
        buttonThree.style.backgroundColor = "#466978";
        buttonThree.style.borderRadius = "12px";
    buttonContainer.appendChild(buttonThree);
    buttonThree.addEventListener("click", getHumanChoice);

    const results = createElement("div");
        document.body.appendChild(results);

    // function roundTwo() {
    //     if (currentRound === 2) {
    //         humanSelection = getHumanChoice();
    //         computerSelection = getComputerChoice();
    //         playRound(humanSelection, computerSelection);
    //     }
    // }

    // function roundThree() {
    //     if (currentRound === 3) {
    //         humanSelection = getHumanChoice();
    //         computerSelection = getComputerChoice();
    //         playRound(humanSelection, computerSelection);
    //     }
    // }

    // function roundFour() {
    //     if (currentRound === 4) {
    //         humanSelection = getHumanChoice();
    //         computerSelection = getComputerChoice();
    //         playRound(humanSelection, computerSelection);
    //     }
    // }

    // function roundFive() {
    //     if (currentRound === 5) {
    //         humanSelection = getHumanChoice();
    //         computerSelection = getComputerChoice();
    //         playRound(humanSelection, computerSelection);
    //     }
    // }

    function determineWinner() {
        if (humanScore > computerScore) {
            alert("Winner winner chicken dinner!");
        }
        else if (humanScore === computerScore) {
            alert("Tie game! Refresh the page to try again dude.")
        }
        else {
            alert("You lose dude!");
        }
    }

    // playRound(humanSelection, computerSelection);
    // roundTwo();
    // roundThree();
    // roundFour();
    // roundFive();
    // determineWinner();
}

//_____________________________________________________________
let humanScore = 0;
let computerScore = 0;
let currentRound = 1;


// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();

playGame();