// this version uses the setMessage(msg, color) for the text color input and validate number ensures correct message and that out-of range numbers don't count

/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
document.querySelector('#test').textContent = winningNum;

// Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        console.log('test');
        window.location.reload();
    }
})



document.querySelector('#guess-btn').addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    // console.log(guess); // check for NaN rather than empty string ''




// Check if won
if(guess === winningNum){

    // Game over - won
    gameOver(true, `${winningNum} is correct, you WIN!`);
   
// Validate number
} else if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number betwee ${min} and ${max}`, 'red'); 
    guessInput.value = '';

}


else {
// Wrong number
guessesLeft -= 1;

if(guessesLeft === 0){
    // Game over - lost
   gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)

} else {
    // Game continues - answer wrong

    // Change border color
    guessInput.style.borderColor = 'red';
    
    // Clear input
    guessInput.value ='';
    

    // Tell user its the wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red' )
}

}

});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable input
    guessInput.disabled = true; 
    // //Disable button
    // guessBtn.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    //message.style.color = 'blue';
    // Set message
    setMessage(msg, color);

    // Play Again
    guessBtn.value = "Play Again";
    guessBtn.className += 'play-again';
}

// Get winning Number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Set meesage
function setMessage(msg, color){
    //console.log('c');
    message.style.color = color;
    message.textContent = msg;
}













