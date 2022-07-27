// Ask user input - choice of rock paper scissors
// Generate computer answer randomly
// Create function that plays a single round of rock paper scissors
// Outputs result of game. 
choices = ['Rock','Paper','Scissors'];

function getComputerChoice(){
    // Randomly choose rock paper or scissors
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection,computerSelection){
    // Compare user input with random computer choice.
    // Rock beats scissors, scissors beats paper, paper beats rock. 
    switch(computerSelection){
        case 'Rock':
            if(playerSelection == 'Paper') return "You Win! Paper beats Rock";
            else if(playerSelection == 'Rock')return 'Tie! You both chose ' + computerSelection;
            else return 'You Lose! Rock beats ' + playerSelection;
        case 'Paper':
            if(playerSelection == 'Scissors') return "You Win! Scissors beats Rock!";
            else if(playerSelection == 'Paper')return 'Tie! You both chose ' + computerSelection;
            else return 'You Lose! Paper beats ' + playerSelection;
        case 'Scissors':
            if(playerSelection == 'Rock') return "You win! Rock beats Scissors!";
            else if(playerSelection == 'Scissors')return 'Tie! You both chose ' + computerSelection;
            else return 'You Lose! Scissors beats ' + playerSelection;
    }
}

function title(choice){
    return choice.charAt(0).toUpperCase() + choice.substr(1).toLowerCase();
}

let userInput = prompt('Enter rock paper or scissors:');
//console.log(title(userInput));
while(!choices.includes(title(userInput))){
    userInput = prompt('Enter rock paper or scissors:');
}
console.log(playRound(title(userInput),getComputerChoice()));

