import { bombs, birds } from "./objects.js";
import { Bird, Bomb } from "./classes.js";

let playerScore = 0;
let playerScoreElm = document.querySelector(".score");
let timeCounter = 10;
let timeCounterElm = document.querySelector(".time-counter");
let birdsKilled = 0;
let birdsKilledElm = document.querySelector(".birds-killed");

export function random(start, end) {
    return start + Math.floor(Math.random() * (end - start));
}

export function createBirdElement(inputBird) {
    let birdElement = document.createElement("img");
    birdElement.src = inputBird.src;
    birdElement.width = inputBird.width;
    birdElement.color = inputBird.color;
    birdElement.score = inputBird.score;
    birdElement.step = inputBird.step;
    birdElement.classList.add("bird");
    birdElement.style.left = -1 * random(0, 1000) - birdElement.width + "px";
    birdElement.style.top = random(0, window.innerHeight - 300) + "px";
    birdElement.addEventListener("click", () => {
        birdDie(birdElement);
    });
    return birdElement;
}
export function birdDie(bird) {
    if (bird.score > 0) document.querySelector(".whistle").play();
    else document.querySelector(".big-bird").play();
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



export function startGame() {
    document.querySelector(".main-music").play();
    let index = random(0, 3);
    let bird = new Bird(birds[index], 100);
    bird.move();
    
}
export function resumeGame() {
    document.querySelector("#start-game-window").style.display = "none";
    Array.from(document.querySelectorAll(".bird")).forEach((bird) => {
        bird.remove();
    });
    Array.from(document.querySelectorAll(".bomb")).forEach((bomb) => {
        bomb.remove();
    });
    startGame();

    setInterval(() => {
        let index = random(0, 3);
        let bird = new Bird(birds[index], 100);
        bird.move();
    }, 1000);
    setInterval(() => {
        let index = random(0, 2);
        let bomb = new Bomb(bombs[index], 100);
        bomb.move();
    }, 4000);
    timeCount();
}
export function getPlayerInfo() {
    const playersSaved = JSON.parse(window.localStorage.getItem('playerInfo'));
    let currentPlayerInfo = {
        name: window.localStorage.getItem('currentPlayerName'),
        date: window.localStorage.getItem('currentPlayerDate'),
        score: '',
    };
    if (playersSaved) {
        const currentPlayerName = window.localStorage.getItem("currentPlayerName");
        for (let player of playersSaved) {
            if (currentPlayerName === player.name) {
                currentPlayerInfo.score = player.score;
                currentPlayerInfo.date = player.date;
            } 
        }
    }
    return currentPlayerInfo;
}
export function setPlayerInfo() {
    const currentPlayerInfo = getPlayerInfo();
    const playerNameElm = document.querySelector(".player-name");
    const lastScoreElm = document.querySelector(".last-score");
    playerNameElm.textContent = currentPlayerInfo.name;
    lastScoreElm.textContent = currentPlayerInfo.score;
}
export function resetGame() {
    setPlayerInfo();
    resumeGame();
    document.querySelectorAll(".popup-container").forEach((window) => {
        window.style.display = "none";
    });
    timeCounter = 10;
    timeCounterElm.textContent = timeCounter;
    birdsKilled = 0;
    birdsKilledElm.textContent = birdsKilled;
    playerScore = 0;
    playerScoreElm.textContent = playerScore;
    document.querySelector(".lose-music").pause();
    document.querySelector(".win-music").pause();
    document.querySelector(".main-music").play();
}
export function timeCount() {
    let timeCounterID = setInterval(() => {
        timeCounter--;
        timeCounterElm.textContent = timeCounter;
        if (timeCounter === 0) endGame(timeCounterID);
    }, 1000);
}
export function endGame(timeCounterID) {
    document.querySelector(".main-music").pause();
    clearInterval(timeCounterID);
    // window.localStorage.setItem("lastScore", playerScore);

    let currentPlayerInfo = {
        name: window.localStorage.getItem('currentPlayerName'),
        date: window.localStorage.getItem('currentPlayerDate'),
        score: playerScore,
    };

    if (window.localStorage.getItem('playerInfo')) {
        const playersSaved = JSON.parse(window.localStorage.getItem('playerInfo'));
        let isFound = false;
        for (let i = 0;i < playersSaved.length;i++) {
            if (currentPlayerInfo.name === playersSaved[i].name) {
                playersSaved[i] = currentPlayerInfo;
                isFound = true;
            } 
        }
        if (!isFound) playersSaved.push(currentPlayerInfo);
        window.localStorage.setItem("playerInfo", JSON.stringify(playersSaved));
    } else {
        let playersList = [];
        playersList.push(currentPlayerInfo);
        window.localStorage.setItem("playerInfo", JSON.stringify(playersList));
    }

    if (playerScore >= 50) {
        document.querySelector("#win-window").style.display = "block";
        document.getElementById(
            "win-paragraph"
        ).innerHTML = `You Won with Score ${playerScore}😍👏`;
        document.querySelector(".win-music").play();
    } else {
        document.querySelector("#lose-window").style.display = "block";
        document.getElementById(
            "lose-paragraph"
        ).innerHTML = `You Lost with Score ${playerScore}😞`;
        document.querySelector(".lose-music").play();
    }

    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);
    for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
    }
}
export function createBombElement(inputBomb) {
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
export function checkBombPosition(bombElement, timerID) {
    if (parseInt(bombElement.style.top) >= window.innerHeight) {
        bombElement.remove();
        clearInterval(timerID);
    }
}
export function explode(bombElement) {
    if (bombElement.explosion === "range") {
        document.querySelector(".small-explode").play();
        bombElement.src = bombs[2].src;
        Array.from(document.querySelectorAll(".bird"))
            .filter((bird) => {
                let condition1 =
                    bird.getBoundingClientRect().right >
                    bombElement.getBoundingClientRect().right - 200;
                let condition2 =
                    bird.getBoundingClientRect().left <
                    bombElement.getBoundingClientRect().left + 200;
                let condition3 =
                    bird.getBoundingClientRect().top <
                    bombElement.getBoundingClientRect().top + 200;
                let condition4 =
                    bird.getBoundingClientRect().bottom >
                    bombElement.getBoundingClientRect().bottom - 200;
                return condition1 && condition2 && condition3 && condition4;
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
        document.querySelector(".large-explode").play();
        document.querySelectorAll(".bird").forEach((bird) => {
            birdDie(bird);
        });
        setTimeout(() => {
            bombElement.remove();
        }, 1000);
    }
}


