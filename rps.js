// Ask user input - choice of rock paper scissors
// Generate computer answer randomly
// Create function that plays a single round of rock paper scissors
// Outputs result of game. 
choices = ['Rock','Paper','Scissors'];
userScore = 0;
computerScore = 0;

function gameStart(){
    // Get buttons nodelist
    const buttons = document.querySelectorAll('button');
    // Iterate through nodelist to assign each button a function
    buttons.forEach((button) => {
        button.addEventListener('click',() => {
            playRound(button.textContent);
        });
    });
}

function checkHasWinner(player,comp){
    // Winner if score is 5
    if(Math.max(player,comp) == 5){
        return true;
    }
    return false;
}

function getWinner(){
    if(userScore >= 5){
        return "Player";
    }
    else if(computerScore == 5){
        return "Computer";
    }
}

function playRound(text){
    if(declareWinner()){
        reset();
    }
    document.querySelector('.result').textContent = roundResult(text);
    updateScoreDisplays();
    return;
}
function declareWinner(){
    // Check if there is a winner
    if(checkHasWinner(userScore,computerScore)){
        document.querySelector('.winner').textContent = "The winner of the game is: " + getWinner();
        // Reset all scores
        return true;
    }
    return false;
}
function updateScoreDisplays(){
    document.querySelector('.playerScore').textContent = 'Player Score: '  + userScore;
    document.querySelector('.compScore').textContent = 'Computer Score: '  + computerScore;
}
function roundResult(playerSelection){
    // Compare user input with random computer choice.
    // Rock beats scissors, scissors beats paper, paper beats rock. 
    // In case of tie, output appropriate message.
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];
    switch(computerChoice){
        case 'Rock':
            if(playerSelection == 'Paper'){
                userScore++;
                declareWinner()
                return "You Win! Paper beats Rock";
            } 
            else if(playerSelection == 'Rock') return "Tie! You both chose " + computerChoice;
            else{
                computerScore++;
                declareWinner()
                return 'You Lose! Rock beats ' + playerSelection;
            }
        case 'Paper':
            if(playerSelection == 'Scissors'){
                userScore++;
                declareWinner()
                return "You Win! Scissors beats Paper";
            } 
            else if(playerSelection == 'Paper') return "Tie! You both chose " + computerChoice;
            else{
                computerScore++;
                declareWinner()
                return 'You Lose! Paper beats ' + playerSelection;
            }
        case 'Scissors':
            if(playerSelection == 'Rock'){
                userScore++;
                declareWinner()
                return "You Win! Rock beats Scissors";
            } 
            else if(playerSelection == 'Scissors') return "Tie! You both chose " + computerChoice;
            else{
                computerScore++;
                declareWinner()
                return 'You Lose! Scissors beats ' + playerSelection;
            }
    }
    return false;
}

function reset(){
    userScore = 0;
    computerScore = 0;
    // Get the element which we will be manipulating
    document.querySelector('.winner').textContent = "";
    document.querySelector('.result').textContent = "";
    document.querySelector('.playerScore').textContent = "Player Score: 0";
    document.querySelector('.compScore').textContent = "Comp Score: 0";
}

gameStart();




