
// OBJECT wordLibrary - contols win & lose count, word library
var wordLibrary = {
    win: 0,
    lose: 0,
    targetWord: "",

    library: [
        "japan",
        "kyoto",
        "yingyang",
        "kimono",
        "samurai",
        "katana",
        "ninja",
        "karate"
    ],

    createTargetWord: function() {
        //Chooses random word in array
        var randWordNum = Math.floor(Math.random() * wordLibrary.library.length)

        //sets targetWord
        this.targetWord = wordLibrary.library[randWordNum]

    },

}


// OBJECT wronKeysPressed controls all variables and functions relating to guessing wrong
var wrongKeysPressed = {
    // the amount of guesses user gets
    wrongStrike: 6,

    //library of wrongly guessed letters
    library: [],
    
    //function 'prints' the incorrect keys to the screen

            // needs to be a for loup the sycles through letters and prints them
    print: function() {
        document.getElementById("letterGuesses").innerHTML = this.library.join('');
    },

    //everytime a guess is wrong needs to run functions to check if they lose
    loseCheck: function() {

        // If they still have strikes left remove a strike
        if (this.wrongStrike !== 0) {
            this.wrongStrike -= 1 

        } else {
        // increase lose count, reset strikes 
            wordLibrary.lose += 1;

            document.getElementById("lose").innerHTML = wordLibrary.lose
            
            board.reset()
        };

    }
};


// this will story the target word 
var correctKeysPressed = {
    library: [],


    //function 'prints' the correct keys to the screen
    print: function () {
        document.getElementById("targetWord").innerHTML = this.library.join('');
    },

    winCheck: function() {
        //ran every correct word guess, if all 'empty' spaces are gone player wins
        if (correctKeysPressed.library.includes("_") === false) {

            wordLibrary.win += 1

            document.getElementById("win").innerHTML = wordLibrary.win

            board.reset()
        };
    }
}



// controls the board
var board = {

    // needs to be changed so it doesn't ring the commas
    create: function() {
        wordLibrary.createTargetWord()

        for (i = 0; i < wordLibrary.targetWord.length; i++) {
            correctKeysPressed.library.push("_")

        }

        correctKeysPressed.print()
        wrongKeysPressed.print();
    },

    //resets the board but keeps wins and loses
    reset: function() {
        //pick a new targetword
        wordLibrary.createTargetWord();

        //resets correct keys pressed
        correctKeysPressed.library = [];

        //resets wrong keys pressed
        wrongKeysPressed.library = [];

        //resets strikes
        wrongKeysPressed.wrongStrike = 6;


        this.create()

    }
}

board.create()







//USER FUNCTION
// WHEN A KEY IS PRESSED
document.onkeyup = function (event) {
    //assigns user key to variable userGuess
    var userGuess = event.key;
    var guessIndex = wordLibrary.targetWord.indexOf(userGuess);

    if (guessIndex === -1) {

        // adds to incorrect guesses
        wrongKeysPressed.library.push(userGuess);
        // calls fuction to display on screen
        wrongKeysPressed.print();
        // checks if the player loses
        wrongKeysPressed.loseCheck();

    } else {

        // locats all matching letters in target word and replaces _ with the letter
        for (i=0; i < wordLibrary.targetWord.length; i++) {
            if (wordLibrary.targetWord[i] === userGuess) {
                correctKeysPressed.library[i] = userGuess;
            }
        }

        // reprints screen
        correctKeysPressed.print();
        //checks to see if the word is targetword as been completed
        correctKeysPressed.winCheck();

    }

    
};