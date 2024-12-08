let humanScore = 0;
let pooPooCaCaScore = 0;

let hoomanChoice = prompt("Type 'Rock', 'Paper' or 'Scissors'");

function getHumanChoice() {
  switch (hoomanChoice.toLowerCase().trim()) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      alert("You didn't pick a valid option");
  }
} // Hooman choice
console.log("You played: " + getHumanChoice());

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

const computerChoice = getComputerChoice();

console.log("PooPooCaCa played: " + computerChoice);

if (getHumanChoice() === computerChoice) {
  console.log("You tied");
}
if (getHumanChoice() === "Rock" && computerChoice === "Paper") {
  pooPooCaCaScore++;
}
if (getHumanChoice() === "Rock" && computerChoice === "Scissors") {
  humanScore++;
}
if (getHumanChoice() === "Paper" && computerChoice === "Scissors") {
  pooPooCaCaScore++;
}
if (getHumanChoice() === "Paper" && computerChoice === "Rock") {
  humanScore++;
}
if (getHumanChoice() === "Scissors" && computerChoice === "Rock") {
  pooPooCaCaScore++;
}
if (getHumanChoice() === "Scissors" && computerChoice === "Paper") {
  humanScore++;
}

console.log("Your score: " + humanScore);
console.log("PooPooCaCa score: " + pooPooCaCaScore);
