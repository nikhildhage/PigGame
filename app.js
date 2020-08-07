/*
 Game Rules
  
 -The game has two players, playing in rounds.
 - In each round , aplayer rolls the dice as many times as he wishes. Each result gets added to his Round
 - BUt, if he rolls a 1, all his ROUND score gets lost. After that , its the next players turn.
 - The player can choose to "Hold", which means his ROUND score gets added to his GLOBAL score. After that , its the next player's turn.
 -   The first player to reach 100 points on GLOBAL score wins the game.
  
 */

//selected elements
var rollBtn = getHandle("rollDice");
var newBtn = getHandle("new");
var holdBtn = getHandle("hold");
var diceImg = getHandle("dice");

// variables
var scores, roundScore, activePlayer, dice;

roundScore = 0;
activePlayer = 0;

/*****************************************************************************/
//Getters and setters
function getHandle(handle) {
  console.log("calling handle function ");
  console.log(handle);
  return document.getElementById(handle);
}

function getRoundScore() {
  return roundScore;
}

function getGlobalScore(activePlayer) {
  return scores[activePlayer];
}

function getActivePlayer() {
  return activePlayer;
}

function setRoundScore(data) {
  roundScore = data;
}

function setActivePlayer(playerId) {
  activePlayer = playerId;
}

/*********************************************************************************/

//Helper functions
function generateDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  diceImg.style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}

function displayRoundSCore() {
  document.querySelector("#current-" + activePlayer).innerHTML =
    "<em>" + roundScore + "</em>";
}

function updateRoundScore() {
  console.log("previous RoundScore:" + roundScore);
  roundScore += dice;
  console.log("dice roll:" + dice);
  console.log("After RoundScore:" + roundScore);
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  console.log("dice roll:" + dice);
  console.log("chabnged active player");
  displayRoundSCore();
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceImg.style.display = "none";
}

/****************************************************************************/

init();

//action functions
newBtn.addEventListener("click", function () {
  init();
});

rollBtn.addEventListener("click", function () {
  generateDice();
  diceImg.style.display = "block";
  diceImg.src = "images/dice-" + dice + ".png";

  if (dice !== 1) {
    updateRoundScore();
    displayRoundSCore();
  } else {
    nextPlayer();
  }
});

holdBtn.addEventListener("click", function () {
  scores[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  console.log("SCore-" + activePlayer + ":" + scores[activePlayer]);
});
