# 🔥 The Shooting Birds Game 🐦🦆
💙 Try it Yourself [Now!!](https://shootingbirdsgame.vercel.app/) 💙

## 🔥 Features

- Appling O.O.P using a Class for Birds and a Class for Bombs  ✔️
- Saving The Player's Name , Last Score , Last Visit Date & Time in Local Storage  ✔️
- Each Bird has a Unique Size , Speed , Score  ✔️
- Each Bomb has a Unique Range of Explosion ✔️
- Custom Popup Window for Player's First Visit , Later Visits displaying Last Score , Last Visit Date and Time ✔️
- Custom Popup Window & Music for a Player who win the game ✔️
- Custom Popup Window & Music for a Player who lose the game ✔️


## 🔥 Modules

- ### Classes in (classes.js)
```
✔️ Includes a Class for Birds & a Class for Bombs
```

- ### Objects in (objects.js)
```
✔️ Includes an array of Bird Objects & an array of Bomb Objects
✔️ Used for the Creation of Birds & Bombs using their Own Unique Constructor
```
- ### Functions in (functions.js)
```
Includes Functions used for
✔️ random () : for generating random integer numbers within a range from start to end
✔️ createBirdElement () : for creating a DOM Element for a Bird , Assigning the Element Properties using a Random Object from the Birds Objects given in (objects.js) => which we use in the Bird Class Constructor
✔️ birdDie () : for Killing a Bird Once it's Shot by the Player , Removing the Bird Element From the DOM
✔️ checkBirdPosition () : When Moving the Bird across the Screen , we Check for the Bird Position => so that if the Bird go out from Inner Width of Screen => It's removed from The DOM
✔️ startGame () : For Starting The Game , Creating the First Bird Element and Moving it
✔️ resumeGame () : For Resuming the Game every time a player wants to play a round , removing all the Birds and Bombs in the DOM , Starting Generating new Birds and Bombs , Starting the Game Count Down 
✔️ getPlayerInfo () : Checks if The Player has played before , returns an object with player's (name , date , score)
✔️ setPlayerInfo () : For getting PLayer Name , Last Score from LocalStorage , Displaying them on the Game Screen
✔️ resetGame() : To Reset the Player Scores : Birds Killed , Player Score and To Reset the Game Timer
✔️ timeCount () : The Game Timer Count Down
✔️ savePlayerInfo () : Saves the Players Info (Name , Date , Score) in Local Storage , If the Player has played before => updates his date and score
✔️ endGame () : used for determining if the player win or lose and to clear all the intervals of the games
✔️ createBombElement () : for creating a DOM Element for a Bomb , Assigning the Element Properties using a Random Object from the Bombs Objects given in (objects.js) => which we use in the Bomb Class Constructor
✔️ checkBombPosition () : When Moving the Bomb across the Screen , we Check for the Bomb Position => so that if the Bomb go out from Inner Height of Screen => It's removed from The DOM
✔️ explode () : for Exploding a Bomb Once it's Shot by the Player , Determining its range of explosion , Killing the Birds in its Range
```
- ### The Welcome Page Script in (welcome.js)
```
✔️ An Input to take Player's Name and save it in Local Storage
✔️ Saving the Date & Time at which the Player Starts the Game in Local Storage
```

- ### The Game Page Script in (gameScript.js)
```
✔️ Display The Welcome Popup Window , with Player's Name , Last Score & Last Visit Date and Time
✔️ Starts the Game When The Player is Ready
```
https://user-images.githubusercontent.com/101140331/214895824-b35cc3a0-8ceb-42b1-9b49-b683faf3a049.mp4


💙 You can view my different projects and contact me through my [Website](https://karimali.vercel.app/) 💙



