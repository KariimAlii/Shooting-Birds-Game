import { random } from "./functions.js";
import {images,gameContainer} from "./variables.js"
// export class Bird {
//     constructor() {

//         // this = document.createElement("img");
//         this.classList.add("bird");
//         this.src = `../images/${images[random(0, 3)]}.gif`;
//         this.style.left = (-1 * random(20,200)) + "px" ;
//         this.style.top = (random(20,700)) + "px" ;
//         gameContainer.appendChild(this);
//     }
//     move() {
//         let timerID = setInterval(() => {
//             this.left += 50;
//         },100);
//         if (this.left === window.innerWidth - this.width) clearInterval(timerID);
//     }
//     die() {}
// }