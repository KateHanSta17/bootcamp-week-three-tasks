let playGame = true;
let wins = 0;
let losses = 0;
let ties = 0;
let choicesCount = { R: 0, P: 0, S: 0 };

const getUserChoice = () => {
  let userInput = prompt("Enter R for Rock, P for Paper, or S for Scissors:");
  userInput = userInput ? userInput.toUpperCase() : "";
  if (["R", "P", "S"].includes(userInput)) {
    choicesCount[userInput]++;
    return userInput;
  } else {
    alert("Invalid choice. Please enter R, P, or S.");
    return getUserChoice();
  }
};

const getComputerChoice = () => {
  const choices = ["R", "P", "S"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    ties++;
    return "It's a tie!";
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    return "You win!";
  } else {
    losses++;
    return "You lose!";
  }
};

const displayFinalStatistics = () => {
  alert(`Final Statistics:
Wins: ${wins}
Losses: ${losses}
Ties: ${ties}
Choices:
  Rock: ${choicesCount.R}
  Paper: ${choicesCount.P}
  Scissors: ${choicesCount.S}`);
};

while (playGame) {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  alert(`You chose: ${userChoice}
Computer chose: ${computerChoice}
Result: ${result}`);
  playGame = confirm("Do you want to play again?");
}

displayFinalStatistics();