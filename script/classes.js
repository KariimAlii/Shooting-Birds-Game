import { createBombElement , checkBombPosition } from "./functions.js";
import { gameContainer } from "./variables.js";


export class Bomb {
    constructor(inputBomb) {
        let bombElement = createBombElement(inputBomb);
        this.bomb = gameContainer.appendChild(bombElement);
    }
    move() {
        checkBombPosition(this.bomb);
    }
}
