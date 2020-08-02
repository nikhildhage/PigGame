/*
 Game Rules
  
 -The game has two players, playing in rounds.
 - In each round , aplayer rolls the dice as many times as he wishes. Each result gets added to his Round
 - BUt, if he rolls a 1, all his ROUND score gets lost. After that , its the next players turn.
 - The player can choose to "Hold", which means his ROUND score gets added to his GLOBAL score. After that , its the next player's turn.
 -   The first player to reach 100 points on GLOBAL score wins the game.
  
 */

var rollBtn = document.querySelector(".btn-roll");

// variables
var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

function setActivePlayer() {
  this.activePlayer = player;
}

function getActivePLayer() {
  return this.activePlayeractivePlayer;
}

function generateDice() {
  diceValue = Math.floor(Math.random() * 6) + 1;
  console.log("Dice value: " + diceValue);
}

function showRoundScore() {
  document.querySelector("#current-" + activePlayer).innerHTML =
    "<em>" + diceValue + "</em>";
}

rollBtn.addEventListener("click", function () {
  var diceImg = document.querySelector(".dice");
  diceImg.style.display = "none";
  generateDice();
  showRoundScore();
  diceImg.style.display = "block";
  diceImg.src = "images/dice-" + diceValue + ".png";
});
