// import { Bird } from "./classes.js";
import {images,gameContainer} from "./variables.js"
let playerScore = 0 ;
export function random(start, end) {
    return start + Math.floor(Math.random() * (end - start));
}
export function birdScore (bird) {
    let score;
    switch (bird.imageID) {
        case 1:
            score = 10;
            break;
        case 2:
            score = 5;
            break;
        case 3:
            score = -10;
            break;
        default:
            break;
    }
    return score;
}
export function createBird(container) {
    let bird = document.createElement("img");
    bird.classList.add("bird");
    bird.imageID = random(0, 3) + 1;
    bird.src = `../images/${images[bird.imageID - 1]}.gif`;
    bird.style.left = (-1 * random(0,1000) - bird.width) + "px" ;
    console.log(bird.style.left)
    bird.style.top = (random(0,window.innerHeight-300)) + "px" ;
    bird.score = birdScore(bird);
    bird.addEventListener("click",() => {
        playerScore += bird.score;
        bird.classList.add('die');
        setTimeout(() => {
            bird.remove();
        },1000)
        // console.log("Image:" + bird.imageID)
        // console.log("Bird Score : " + bird.score);
        // console.log("player Score", playerScore)
    })
    gameContainer.appendChild(bird);
    return bird;
}
export function checkPosition (bird,timerID) {
    if (parseInt(bird.style.left) >= window.innerWidth) {
        bird.remove();
        clearInterval(timerID);
    }
}
export function moveBird (bird) {
    let timerID = setInterval(() => {
        bird.style.left = (parseInt(bird.style.left) + 20) + "px";
        checkPosition(bird,timerID)
    },100);
}

