window.onload = function () {
    const playerName = document.querySelector(".player-name");
    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", (e) => {
        // e.preventDefault();
        window.localStorage.setItem("currentPlayerName", playerName.value);
        const date = new Date();
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        window.localStorage.setItem("currentPlayerDate", date.toLocaleString("en-US", options));
    });
};
