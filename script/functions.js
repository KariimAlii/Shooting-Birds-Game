// import { Bird } from "./classes.js";
import { images, gameContainer, playerName, lastScore } from "./variables.js";
import { bombs } from "./objects.js";
export let playerScore = 0;
let playerScoreElm = document.querySelector(".score");
let timeCounter = 120;
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
        birdDie(bird);
    });
    gameContainer.appendChild(bird);
    return bird;
}
export function birdDie (bird) {
    playerScore += bird.score;
    playerScoreElm.textContent = playerScore;
    birdsKilled++;
    birdsKilledElm.textContent = birdsKilled;
    bird.classList.add("die");
    setTimeout(() => {
        bird.remove();
    }, 1000);
}
export function checkBirdPosition(bird, timerID) {
    if (parseInt(bird.style.left) >= window.innerWidth) {
        bird.remove();
        clearInterval(timerID);
    }
}
export function moveBird(bird) {
    let timerID = setInterval(() => {
        bird.style.left = parseInt(bird.style.left) + 20 + "px";
        checkBirdPosition(bird, timerID);
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
export function endGame(timeCounterID) {
    clearInterval(timeCounterID);
    window.localStorage.setItem("lastScore", playerScore);
    console.log("end!");
    if (playerScore >= 50) {
        document.querySelector("#win-window").style.display = "block";
        console.log('you win')
    } else {
        document.querySelector("#lose-window").style.display = "block";
        console.log('you lose')
    }

    // You can find the "highest" timer identifier by creating a new timer that does "nothing" (by giving it an empty function to run, scheduled to run decades in the future), and then clear every timer between ids 1 and that identifier, like so:
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
    }
    
}

export function explode (bombElement) {
    if (bombElement.explosion === "range") {
        bombElement.src = bombs[2].src;
        Array.from(document.querySelectorAll(".bird"))
            .filter((bird) => {
                let condition1 = bird.getBoundingClientRect().right > bombElement.getBoundingClientRect().right - 100;
                let condition2 = bird.getBoundingClientRect().left < bombElement.getBoundingClientRect().left + 100;
                let condition3 = bird.getBoundingClientRect().top < bombElement.getBoundingClientRect().top + 100;
                let condition4 = bird.getBoundingClientRect().bottom > bombElement.getBoundingClientRect().bottom - 100;
                return (condition1 && condition2 && condition3 && condition4);
            })
            .forEach((bird) => {
                birdDie(bird);
            });
        bombElement.width = bombs[2].width;
        setTimeout(() => {
            bombElement.remove();
        }, 1000);
    } else {
        bombElement.src = bombs[3].src;
        bombElement.width = bombs[3].width;
        setTimeout(() => {
            bombElement.remove();
            document.querySelectorAll(".bird").forEach((bird) => {
                birdDie(bird);
            });
        }, 2000);
    }
}
export function createBombElement (inputBomb) {
    let bombElement = document.createElement("img");
    bombElement.src = inputBomb.src;
    bombElement.width = inputBomb.width;
    bombElement.explosion = inputBomb.explosion;
    bombElement.classList.add("bomb");
    bombElement.style.left =
        random(0, window.innerWidth - bombElement.width) + "px";
    bombElement.style.top = -1 * random(0, 300) + "px";
    bombElement.addEventListener("click", function () {
        explode(bombElement);
    });
    return bombElement;
}
export function checkBombPosition(bombElement) {
    let timerID = setInterval(() => {
        bombElement.style.top = parseInt(bombElement.style.top) + 20 + "px";
        if (parseInt(bombElement.style.top) >= window.innerHeight) {
            bombElement.remove();
            clearInterval(timerID);
        }
    }, 100);
}