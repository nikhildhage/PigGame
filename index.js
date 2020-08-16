/*
 Game Rules
  
 -The game has two players, playing in rounds.
 - In each round , aplayer rolls the dice as many times as he wishes. Each result gets added to his Round
 - BUt, if he rolls a 1, all his ROUND score gets lost. After that , its the next players turn.
 - The player can choose to "Hold", which means his ROUND score gets added to his GLOBAL score. After that , its the next player's turn.
 -   The first player to reach 100 points on GLOBAL score wins the game.
  
 */

//selected elements and imports
import { Game, gamePlaying } from "./js/game.js";
import { rollBtn, newBtn, holdBtn, diceImg } from "./js/util.js";

// variables
var game = new Game();
console.log(game);
/*****************************************************************************/

/*********************************************************************************/
game.init();
//Helper functions
//set up gameBoard and set activePlayer
function nextPlayer() {
  game.getActivePlayer() === 0
    ? game.setActivePlayer(1)
    : game.setActivePlayer(0);
  game.setRoundScore(0);
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  console.log("dice roll:" + game.dice);
  console.log("chabnged active player to:" + game.getActivePlayer());
  game.displayRoundSCore();
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceImg.style.display = "none";
}

/****************************************************************************/

//controller functions

//Fire new game event
//Event: clear game board and starts a new game when new game button is clicked
newBtn.addEventListener("click", function () {
  game.init();
  console.log(game);
});

//Fire rollDice event
//Event: Displays dice image and performs an action when roll dice button is clicked
rollBtn.addEventListener("click", function () {
  if (gamePlaying) {
    console.log("playing game");
    game.generateDice();
    diceImg.style.display = "block";
    diceImg.src = "images/dice-" + game.dice + ".png";

    //end active player's turn and change activePLayer
    if (game.dice !== 1) {
      game.updateRoundScore();
      game.displayRoundSCore();
    } else {
      nextPlayer();
    }
  }
});

//Fire hold click event
//Event: calculate , save adn display globalScore

holdBtn.addEventListener("click", function () {
  if (gamePlaying) {
    console.log("playing game");
    //current global score = previous global score + current roundScore
    let globalScore = game.getGlobalScore() + game.getRoundScore();
    game.setGlobalScore(globalScore);

    //console.log((globalScore = globalScore + "+" + game.getRoundScore()));
    document.getElementById(
      "score-" + game.getActivePlayer()
    ).textContent = game.getGlobalScore();

    if (game.getGlobalScore() >= 30) {
      document.getElementById("name-" + game.getActivePlayer()).textContent =
        "Winner";
      document
        .querySelector(".player-" + game.getActivePlayer() + "-panel")
        .classList.add("winner");

      document
        .querySelector(".player-" + game.getActivePlayer() + "-panel")
        .classList.remove("active");
      gamePlaying = false;
      console.log("game has stopped");
    } else {
      nextPlayer();
    }
  }
});
