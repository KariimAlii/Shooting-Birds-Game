window.onload = function () {
    const playerName = document.querySelector(".player-name");
    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", () => {
        window.localStorage.setItem("playerName", playerName.value);
        const date = new Date();
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        window.localStorage.setItem("date", date.toLocaleString("en-US", options));
    });
    
}
