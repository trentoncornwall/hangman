
// initializing some variables


// Word Library Object with functions that will control the game
var wordLibrary = {
    library: ["trenton","cornwall","best","computer","programming","code"],
    
    targetWord: function() {
        var randWordNum = Math.floor(Math.random() * wordLibrary.library.length)
        return wordLibrary.library[randWordNum]
    }
}


// this will store the word the user needs to guess
var targetWord = "";
targetWord += wordLibrary.targetWord();

// this will store keys they pressed
var keysPressed = [];





//USER FUNCTION
document.onkeyup = function(event){

    //assigns user key to variable userGuess
    // var userGuess = event.key;
    
};