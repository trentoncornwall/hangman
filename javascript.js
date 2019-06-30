// initializing some variables


// Word Library Object with functions that will control the game
var wordLibrary = {
    library: ["trenton", "cornwall", "best", "computer", "programming", "code"],

    targetWord: function () {
        var randWordNum = Math.floor(Math.random() * wordLibrary.library.length)
        return wordLibrary.library[randWordNum]
    }
}



// this will store the word the user needs to guess
var targetWord = "";
targetWord += wordLibrary.targetWord();


// this will store keys they pressed and fuction for DOM control
var wrongKeysPressed = {
    library: [],

    print: function () {
        document.getElementById("letterGuesses").textContent = this.library;
    }
};


// this will story the target word 
var correctKeysPressed = {
    library: [],

    print: function (x) {
        document.getElementById("targetWord").textContent = this.library;
    }
}

for (i = 0; i < targetWord.length; i++) {
    correctKeysPressed.library.push("_")
}



correctKeysPressed.print()


//USER FUNCTION
document.onkeyup = function (event) {
    //assigns user key to variable userGuess
    var userGuess = event.key;
    var guessIndex = targetWord.indexOf(userGuess);

    if (guessIndex === -1) {

        // adds to incorrect guesses
        wrongKeysPressed.library.push(userGuess);

        // calls fuction to display on screen
        wrongKeysPressed.print()


    } else {

        correctKeysPressed.library[guessIndex] = userGuess;

        correctKeysPressed.print()

    }

};