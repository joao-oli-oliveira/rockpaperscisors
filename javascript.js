const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const resultSection = document.getElementById("container");

let humanScore = 0;
let pooPooCaCaScore = 0;

rockButton.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

// paperButton.addEventListener("click", () => {
//   alert("Hello World");
// });
// scissorsButton.addEventListener("click", () => {
//   alert("Hello World");
// });

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "Error 23";
  }
} // Computer choice

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("You tied");
  }
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    pooPooCaCaScore++;
  }
  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanScore++;
  }
  if (humanChoice === "Paper" && computerChoice === "Scissors") {
    pooPooCaCaScore++;
  }
  if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanScore++;
  }
  if (humanChoice === "Scissors" && computerChoice === "Rock") {
    pooPooCaCaScore++;
  }
  if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humanScore++;
  }

  console.log("You played: " + humanChoice);
  console.log("PooPooCaCa played: " + computerChoice);
} // Play a round & score

// function getHumanChoice() {
//   let hoomanChoice = prompt(
//     "Type 'Rock', 'Paper' or 'Scissors'",
//     `${getComputerChoice()}`
//   );
//   switch (hoomanChoice.toLowerCase().trim()) {
//     case "rock":
//       return "Rock";
//     case "paper":
//       return "Paper";
//     case "scissors":
//       return "Scissors";
//     default:
//       alert("You didn't pick a valid option");
//   }
// } // Hooman choice

// function playGame() {
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   console.log("Your score: " + humanScore);
//   console.log("PooPooCaCa score: " + pooPooCaCaScore);
// }

// playGame();
