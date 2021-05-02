// Guessimg Game
// Guess a number from 1 to 5
// Generate a random number between 1 to 5
// if the guess number matches ramdom number; then show message won else lost
// Run the game for 5 times
// show the number of wons and losts


var win = 0;
var lost = 0;

for (var x = 1; x <= 5; x++) {
    var userId = parseInt(prompt("Enter a Number 1 to 5; "));

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (userId === randomNumber) {
        console.log("Your are Win");
        win++;
    } else {
        console.log("You are lost. Random number is " + randomNumber);
        lost++;
    }
}
document.write("Total Win = " + win + "<br/ >");
document.write("Total Lost = " + lost + "<br/ >");