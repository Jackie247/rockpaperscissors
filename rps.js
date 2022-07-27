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
    // In case of tie, output appropriate message.
    switch(computerSelection){
        case 'Rock':
            if(playerSelection == 'Paper'){
                console.log("You Win! Paper beats Rock");
                return 1;
            } else if(playerSelection == 'Rock'){
                console.log("Tie! You both chose " + computerSelection);
                return 0;
            }
            else{
                console.log('You Lose! Rock beats ' + playerSelection);
                return -1;
            }
        case 'Paper':
            if(playerSelection == 'Scissors'){
                console.log("You Win! Scissors beats Paper");
                return 1;
            } else if(playerSelection == 'Paper'){
                console.log("Tie! You both chose " + computerSelection);
                return 0;
            }
            else{
                console.log('You Lose! Paper beats ' + playerSelection);
                return -1;
            }
        case 'Scissors':
            if(playerSelection == 'Rock'){
                console.log("You Win! Rock beats Scissors");
                return 1;
            } else if(playerSelection == 'Scissors'){
                console.log("Tie! You both chose " + computerSelection);
                return 0;
            }
            else{
                console.log('You Lose! Scissors beats ' + playerSelection);
                return -1;
            }
    }
}

// Handles user input to ensure its the same as choice in choices array
function title(choice){
    return choice.charAt(0).toUpperCase() + choice.substr(1).toLowerCase();
}

function game(games){
    let score = 0;
    for(let i  = 0, n = games; i < n; ++i){
        let userInput = prompt('Enter rock paper or scissors:');
        let result = playRound(title(userInput),getComputerChoice());
        if(result == 1){
            score++;
        }
    }
    console.log("Your final score was " + score);
    return score
}

// Get user choice 
//let userInput = prompt('Enter rock paper or scissors:');
//console.log(title(userInput));
//while(!choices.includes(title(userInput))){
//    userInput = prompt('Enter rock paper or scissors:');
//}
// Output result to console.
//console.log(playRound(title(userInput),getComputerChoice()));
game(5);