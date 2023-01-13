// import { Bird } from "./classes.js";
import { createBird, moveBird, timeCount , startGame } from "./functions.js";
import { gameContainer  } from "./variables.js";

startGame();

setInterval(() => {
    let bird = createBird(gameContainer);
    moveBird(bird);
}, 1000);

timeCount();



