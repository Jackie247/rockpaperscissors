// Ask user input - choice of rock paper scissors
// Generate computer answer randomly
// Create function that plays a single round of rock paper scissors
// Outputs result of game. 

function getComputerChoice(){
    // Randomly choose rock paper or scissors
    const choices = ['Rock','Paper','Scissors'];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

