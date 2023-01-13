// import { Bird } from "./classes.js";
import { images, gameContainer, playerName, lastScore } from "./variables.js";
export let playerScore = 0;
let playerScoreElm = document.querySelector(".score");
let timeCounter = 20;
let timeCounterElm = document.querySelector(".time-counter");
let birdsKilled = 0;
let birdsKilledElm = document.querySelector(".birds-killed");
export function random(start, end) {
    return start + Math.floor(Math.random() * (end - start));
}
export function birdScore(bird) {
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
    bird.style.left = -1 * random(0, 1000) - bird.width + "px";
    bird.style.top = random(0, window.innerHeight - 300) + "px";
    console.log("bird.style.top: ", bird.style.top);
    bird.score = birdScore(bird);
    bird.addEventListener("click", () => {
        playerScore += bird.score;
        playerScoreElm.textContent = playerScore;
        birdsKilled++;
        birdsKilledElm.textContent = birdsKilled;
        bird.classList.add("die");
        setTimeout(() => {
            bird.remove();
        }, 1000);
    });
    gameContainer.appendChild(bird);
    return bird;
}
export function checkPosition(bird, timerID) {
    if (parseInt(bird.style.left) >= window.innerWidth) {
        bird.remove();
        clearInterval(timerID);
    }
}
export function moveBird(bird) {
    let timerID = setInterval(() => {
        bird.style.left = parseInt(bird.style.left) + 20 + "px";
        checkPosition(bird, timerID);
    }, 100);
}

export function timeCount() {
    let timeCounterID = setInterval(() => {
        timeCounter--;
        timeCounterElm.textContent = timeCounter;
        if (timeCounter === 0) endGame(timeCounterID);
    }, 1000);
}

export function startGame() {
    let bird = createBird(gameContainer);
    moveBird(bird);
    playerName.textContent = window.localStorage.getItem("playerName");
    lastScore.textContent = window.localStorage.getItem("lastScore");
}
export function endGame (timeCounterID) {
    clearInterval(timeCounterID);
    window.localStorage.setItem("lastScore", playerScore);
    console.log("end!");
    if (playerScore >= 50) console.log("You win");
    else console.log("You lose");
    gameContainer.innerHTML = `<h1>Hi Krsha</h1>`
}
