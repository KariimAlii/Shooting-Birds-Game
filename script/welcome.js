const playerName = document.querySelector(".player-name");
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", () => {
    window.localStorage.setItem("playerName",playerName.value);
});
