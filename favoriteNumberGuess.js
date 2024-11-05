let favNumber = 6; 

let userGuess = null;


while (userGuess !== favNumber) {
    
    userGuess = parseInt(prompt("Guess my favorite number:"), 10q);

    
    if (userGuess > favNumber) {
        console.log("Your guess is too high. Try again!");
    } else if (userGuess < favNumber) {
        console.log("Your guess is too low. Try again!");
    } else if (userGuess === favNumber) {
        console.log("Correct! You've guessed my favorite number.");
    } else {
        console.log("Please enter a valid number.");
    }
}
