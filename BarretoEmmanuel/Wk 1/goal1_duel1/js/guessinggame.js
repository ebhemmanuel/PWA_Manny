/**
 * Created with JetBrains WebStorm.
 * User: emmanuelbarreto
 * Date: 10/15/13
 * Time: 9:19 AM
 * To change this template use File | Settings | File Templates.
 */
(function (){

    var playersGuess     = 0;
    var guessesRemaining = 3;
    var guessesMade      = 0;

    var dom = {  // made an object out of the dom to be able to access these easier dom.input.value and so on.

         input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("#button")

    };

    // the random will be a decimal number so we * by 10, the floor ( to round up)
    // the 1 at the end says to start at 1

    var magicNum = Math.floor(Math.random()*10+1); // gives out the magic number

    var clickFn  = function(e){

        console.log(guessesRemaining,input.value);// ???
        validateInput();

    };

    var validateInput = function(){

        playersGuess  = parseInt(dom.input.value);

        if (isNaN(playersGuess)) /*Check for proper data type*/

        {dom.output.innerHTML = 'Please enter a number.';}

        else if (playersGuess < 1 || playersGuess > 10)  /*This is not a required item but is nice to have.*/

        {dom.output.innerHTML = 'Please enter a number between 1 and 10.';}

        else{playerGame();}

    };

    var playerGame = function (){

        guessesRemaining--;
        guessesMade++;
    var gameState= 'Guess: '+guessesMade+', Remaining: '+guessesRemaining;
        playersGuess= parseInt(dom.input.value);

        if(playersGuess > magicNum) {dom.output.innerHTML= 'That\'s too high.'+gameState;}
   else if(playersGuess < magicNum) {dom.output.innerHTML= 'That\'s too low.'+gameState;}
   else if(playersGuess===magicNum) {gameOver(true);} //polymorphism look it up.
        if(guessesMade  < 1)        {console.log("Game Over : guessesRemaining is < 1"); gameOver(false);}


    };

    var gameOver= function(win){

        if (win) {

            dom.output.innerHTML

                ='Yes, it\'s '+magicNum+'!'+'<br>'
                + 'It only took you '+guessesMade+' guesses.'

         }

        else {

            dom.output.innerHTML

                ='No more guesses left!'+'<br>'
                +'The number was: '+ magicNum+'.';

          }
    };

    dom.button.removeEventListener('click', onClick)

})();