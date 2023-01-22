// import { Bird } from "./classes.js";
import { createBird, moveBird, timeCount, startGame, random } from "./functions.js";
import { gameContainer } from "./variables.js";
import { Bomb } from "./classes.js";
import {bombs} from "./objects.js"
const buttons = document.querySelectorAll(".play-again");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        window.location.reload();
    });
});

startGame();

setInterval(() => {
    let bird = createBird(gameContainer);
    moveBird(bird);
}, 1000);
setInterval(() => {
    let index = random(0,2);
    let bomb = new Bomb(bombs[index],100);
    bomb.move();
}, 4000);
timeCount();
