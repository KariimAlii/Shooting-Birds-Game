import { resetGame, resumeGame , setPlayerInfo , getPlayerInfo } from "./functions.js";

window.onload = function () {
    setPlayerInfo();
    const currentPlayerInfo = getPlayerInfo();
    const playerName = currentPlayerInfo.name || 'New Visitor';
    const lastScore = currentPlayerInfo.score;
    const date = currentPlayerInfo.date;
    const welcomeParagraph = document.getElementById("welcome-paragraph");


    if (lastScore) {
        welcomeParagraph.innerHTML = `
        <img src="./images/welcome.png" alt="Welcome Image" class="welcome-img">
        <p class="welcome-message">
            Welcome ${playerName}!π<br>
            We hope You enjoy our Game π<br>
            To win you have to score 50 points or more!π€©<br>
            Your Last Score was ${lastScore}π<br>on ${date}π<br>
            Enjoy Your Gameπ<br>
        </p>
        `;
    } else {
        welcomeParagraph.innerHTML = `
        <img src="./images/welcome.png" alt="Welcome Image" class="welcome-img">
        <p class="welcome-message">
            Welcome ${playerName}!π<br>
            It's Your First Time to Play Our Game!π<br>
            To win you have to score 50 points or more!π€©<br>
            Enjoy Your Gameπ
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
    startGameBtn.addEventListener("click", () => {
        resumeGame();
    });
};
