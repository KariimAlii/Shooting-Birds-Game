import { createBombElement , checkBombPosition,createBirdElement,checkBirdPosition } from "./functions.js";
import { gameContainer } from "./variables.js";

export class Bomb {
    constructor(inputBomb) {
        let bombElement = createBombElement(inputBomb);
        this.bomb = gameContainer.appendChild(bombElement);
    }
    move() {
        let timerID = setInterval(() => {
            this.bomb.style.top = parseInt(this.bomb.style.top) + 20 + "px";
            checkBombPosition(this.bomb,timerID);
        }, 100);
    }
}
export class Bird {
    constructor(inputBird) {
        let birdElement = createBirdElement(inputBird);
        this.bird = gameContainer.appendChild(birdElement);
    }
    move() {
        let timerID = setInterval(() => {
            this.bird.style.left = parseInt(this.bird.style.left) + this.bird.step + "px";
            checkBirdPosition(this.bird,timerID);
        }, 100);
    }
}
