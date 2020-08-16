import { diceImg } from "./util.js";

class Game {
  constructor() {
    this.scores = [0, 0];
    this.roundScore = 0;
    this.activePlayer = 0;
    this.dice = 0;
  }

  init() {
    console.log("start new game");
    this.scores = [0, 0];
    this.roundScore = 0;
    this.activePlayer = 0;
    this.dice = 0;

    diceImg.style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
  }

  getRoundScore() {
    return this.roundScore;
  }

  getGlobalScore() {
    return this.scores[this.activePlayer];
  }

  setGlobalScore(value) {
    this.scores[this.activePlayer] = value;
  }
  getActivePlayer() {
    return this.activePlayer;
  }

  setRoundScore(data) {
    this.roundScore = data;
  }

  setActivePlayer(activePlayer) {
    this.activePlayer = activePlayer;
  }

  generateDice() {
    this.dice = Math.floor(Math.random() * 6) + 1;
  }

  displayRoundSCore() {
    document.querySelector("#current-" + this.activePlayer).innerHTML =
      "<em>" + this.getRoundScore() + "</em>";
  }

  updateRoundScore() {
    console.log(`previous RoundScore:${this.roundScore}`);
    this.roundScore += this.dice;
    console.log("dice roll:" + this.dice);
    console.log(`After RoundScore:${this.roundScore}`);
  }
}

export default Game;
