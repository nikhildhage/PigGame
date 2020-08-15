function getHandle(id) {
  console.log("calling handle function: " + id);
  return document.getElementById(id);
}

export const rollBtn = getHandle("rollDice");
export const newBtn = getHandle("new");
export const holdBtn = getHandle("hold");
export const diceImg = getHandle("dice");
