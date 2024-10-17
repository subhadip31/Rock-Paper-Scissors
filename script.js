const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const userHandIcon = document.querySelector(".user.hand-icon");
const computerHandIcon = document.querySelector(".computer.hand-icon");
const result = document.querySelector(".result");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");

const rockIcon = "✊🏻";
const paperIcon = "✋🏻";
const scissorsIcon = "✌🏻";

const iconsList = [rockIcon, paperIcon, scissorsIcon];

function gameLogic(selectedIcon, winningIcon) {
  result.innerText = "";
  userHandIcon.innerText = "🤜🏻";
  computerHandIcon.innerText = "🤛🏻";
  userHandIcon.classList.add("shakeUserHands");
  computerHandIcon.classList.add("shakeComputerHands");

  setTimeout(() => {
    userHandIcon.classList.remove("shakeUserHands");
    computerHandIcon.classList.remove("shakeComputerHands");
    userHandIcon.innerText = selectedIcon;
    const computerChoice = Math.floor(Math.random() * 3);
    computerHandIcon.innerText = iconsList[computerChoice];
    if (userHandIcon.innerText === computerHandIcon.innerText) {
      result.innerText = "Match Tied";
    } else if (computerHandIcon.innerText === winningIcon) {
      result.innerText = "You Won!!!";
    } else {
      result.innerText = "Computer Won!!!";
    }

    if (result.innerText === "You Won!!!") {
      const points = parseInt(userScore.innerText);
      userScore.innerText = points + 1;
    } else if (result.innerText === "Computer Won!!!") {
      const points = parseInt(computerScore.innerText);
      computerScore.innerText = points + 1;
    }
  }, 1000);
}

rockBtn.addEventListener("click", () => {
  gameLogic(rockIcon, scissorsIcon);
});

paperBtn.addEventListener("click", () => {
  gameLogic(paperIcon, rockIcon);
});

scissorsBtn.addEventListener("click", () => {
  gameLogic(scissorsIcon, paperIcon);
});
