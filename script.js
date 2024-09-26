const guessButton = document.getElementById('guessButton');
const userGuess = document.getElementById('userGuess');
const message = document.getElementById('message');
const newGameButton = document.getElementById('newGameButton');

let randomNumber; // Declare without initial value

function generateNewNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

generateNewNumber(); // Generate random number on page load

guessButton.addEventListener('click', function() {
  const userNum = parseInt(userGuess.value);

  if (isNaN(userNum)) {
    message.textContent = "Please enter a valid number!";
    return;
  }

  if (userNum < 1 || userNum > 100) {
    message.textContent = "Guess between 1 and 100!";
    return;
  }

  if (userNum === randomNumber) {
    message.textContent = "Congratulations! You guessed the number!";
    guessButton.disabled = true; // Disable button after win
  } else if (userNum > randomNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = "Too low! Try again.";
  }
});

newGameButton.addEventListener('click', function() {
  message.textContent = ""; // Clear message
  guessButton.disabled = false; // Enable button again
  userGuess.value = ""; // Clear input field
  generateNewNumber(); // Generate new random number
});