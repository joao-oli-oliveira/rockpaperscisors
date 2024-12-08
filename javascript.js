let humanScore = 0;
let pooPooCaCaScore = 0;

let hoomanChoice = window.prompt(
  "Type 'Rock', 'Paper' or 'Scissors'",
  `${getComputerChoice()}`
);

function getHumanChoice() {
  switch (hoomanChoice) {
    case "Rock":
      return "Rock";
    case "Paper":
      return "Paper";
    case "Scissors":
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
console.log("PooPooCaCa played: " + getComputerChoice());

if (getHumanChoice() === getComputerChoice()) {
  prompt("You tied");
}
