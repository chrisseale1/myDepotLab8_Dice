// Global array to keep track of all created Die objects
var dice = [];
var diceContainer;
document.addEventListener('DOMContentLoaded', function() {
    diceContainer = document.getElementById('dice-container');
});

var Die = function() {
    this.value = null;
    this.div = document.createElement('div');
    this.div.className = 'die';
    this.div.addEventListener('click', this.roll.bind(this)); // Extra Credit
    this.div.addEventListener('dblclick', this.remove.bind(this)); // Extra Credit
    this.roll();
    diceContainer.appendChild(this.div);
}
Die.prototype.roll = function() {
    // Generate a random number 1-6 and set the face value property of the die
    // Also set the innerHTML of the die's div to be the number
    var num = Math.floor(Math.random() * 6) + 1;
    this.value = num;
    this.div.innerHTML = num;
    return num;
}
// Extra Credit
Die.prototype.remove = function() {
    // Get the index of "this" die in the array (its location)
    var index = dice.indexOf(this);
    if (index !== -1) { // If the die was found in the array
        dice.splice(index, 1); // Remove the die from the dice array
        this.div.remove(); // Remove the die's div from the DOM
    }
}

function addDie() {
    // Create a new instance of a Die. Push it onto the global array for later use
    var die = new Die();
    dice.push(die);
}

function rollDice() {
    // Loop through the global dice array and call .roll() on each die
    for (var i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
}

// Extra credit
function sumDice() {
    // Loop through the global dice array and sum up all the value properties
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        sum += dice[i].value;
    }
    alert('The sum of all the dice in the window is ' + sum + '.');
}