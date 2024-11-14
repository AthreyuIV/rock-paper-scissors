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
        console.log("You'll never be Chuck Norris with that attitude.")
    }
}

//_______________________________________________________

// create a CONST called humanScore with a value of 0
let humanScore = 0
//create a CONST called computerScore with a value of 0
let computerScore = 0

//_______________________________________________________

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
    else if (humanSelection === "paper" && computerSelection ==="scissors") {
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
}

// // GLOBAL CONST humanSelection with a value getHumanChoice();
const humanSelection = getHumanChoice();

// // GLOBAL CONST computerSelection with a value getComputerChoice();
const computerSelection = getComputerChoice();

// // Call FUNCTION playRound with arguements humanSelection and computerSelection
playRound(humanSelection, computerSelection);





