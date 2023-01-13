// import { Bird } from "./classes.js";
import { createBird , moveBird } from "./functions.js";
import {gameContainer} from "./variables.js"

let bird = createBird(gameContainer);
moveBird(bird);

setInterval(() => {
    let bird = createBird(gameContainer);
    moveBird(bird);
}, 1000);


