const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You win!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Draw!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You lose!";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "Draw!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You win!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You win!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "Draw!";
  }
};

const computerPlay = () => {
  let randomValue = Math.floor(Math.random() * 3);

  if (randomValue === 0) {
    return "rock";
  } else if (randomValue === 1) {
    return "paper";
  } else if (randomValue === 2) {
    return "scissors";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerMove = prompt();
    console.log("Your move: " + playerMove);
    let computerMove = computerPlay();
    console.log("Computer move: " + computerMove);
    let lowerStringPlayerChoose = playerMove.toLowerCase();

    console.log(playRound(lowerStringPlayerChoose, computerMove));
  }
  return "Good game!";
};

console.log(game());
