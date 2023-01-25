import {resetGame,game } from "./functions.js";
import {welcomeParagraph } from "./variables.js";
window.onload = function () {
    
    const playerName = window.localStorage.getItem("playerName");
    const lastScore = window.localStorage.getItem("lastScore");
    const date = window.localStorage.getItem("date");

    playerName.textContent = window.localStorage.getItem("playerName");
    lastScore.textContent = window.localStorage.getItem("lastScore");
    
    
    if (lastScore) {
        welcomeParagraph.innerHTML = `
        <img src="./images/welcome.png" alt="Welcome Image" class="welcome-img">
        <p class="welcome-message">
            Welcome ${playerName}!😄<br>
            We hope You enjoy our Game 😍<br>
            To win you have to score 50 points or more!🤩<br>
            Your Last Score was ${lastScore}😁<br>on ${date}👌<br>
            Enjoy Your Game😎<br>
        </p>
        `;
    } else {
        welcomeParagraph.innerHTML = `
        <img src="./images/welcome.png" alt="Welcome Image" class="welcome-img">
        <p class="welcome-message">
            Welcome ${playerName}!😄<br>
            It's Your First Time to Play Our Game!😍<br>
            To win you have to score 50 points or more!🤩<br>
            Enjoy Your Game😎
        </p>
        `;
    }

    const playAgainButtons = document.querySelectorAll(".play-again");
    playAgainButtons.forEach((button) => {
        button.addEventListener("click", () => {
            resetGame();
        });
    });
    
    const startGameBtn = document.querySelector(".start-game-btn");
    startGameBtn.addEventListener("click" , () => {
        game();
    })
}



