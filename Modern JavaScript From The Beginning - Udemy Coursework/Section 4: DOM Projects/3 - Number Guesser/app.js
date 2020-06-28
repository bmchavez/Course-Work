/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player get a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

// Assign UI min and Max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Play again event listener
UIgame.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// Listen for guess
UIguessBtn.addEventListener('click', function(){
  let guess = parseInt(UIguessInput.value);

  console.log(guess);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){
    gameOver(true, `${winningNum} is correct, YOU WIN!`)
  } else{
    // Wrong number
    guessesLeft -= 1;
  
    if(guessesLeft === 0){
      // GAME OVER - LOST
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    } else {
      // GAME CONTINUES - ANSWER WRONG
      // Change border color
      UIguessInput.style.borderColor = 'red';

      // Clear Input
      UIguessInput.value = '';

      // Tell user it is the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left!`, 'red')
    }
  }
})

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  UIguessInput.disabled = true;
  // Change border color
  UIguessInput.style.borderColor = color;
  // // Set text color
  // UImessage.style.color = color
  // Set Message
  setMessage(msg, color);

  // Play again?
  UIguessBtn.value = 'Play Again';
  UIguessBtn.className += 'play-again';

}

// Get Random Winning number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color){
  UImessage.style.color = color;
  UImessage.textContent = msg;
};
