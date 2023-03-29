const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoise;
let computerChoises;
let res = ['you win','you lose','its a tie']

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(
    'click',(e)=>{
        userChoise = e.target.id  
        userChoiceDisplay.innerHTML = userChoise
        generateComputerChoise();
        generateResult();
    }
))

function generateComputerChoise(){
    const randomnum = Math.floor(Math.random()*possibleChoices.length)+1
    console.log(randomnum);
    if(randomnum == 1){
        computerChoises = 'rock';
    }
    if(randomnum == 2){
        computerChoises = 'paper';
    }
    if(randomnum == 3){
        computerChoises = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoises;

}

function generateResult(){
    if(userChoise == 'rock'){
        switch(computerChoises){
            case('rock'):
            resultDisplay.innerHTML = res[2];
            break;
            case('paper'):
            resultDisplay.innerHTML = res[1];
            break;
            case('scissors'):
            resultDisplay.innerHTML = res[0];
            break;
        }
    }
    if(userChoise == 'paper'){
        switch(computerChoises){
            case('rock'):
            resultDisplay.innerHTML = res[0];
            break;
            case('paper'):
            resultDisplay.innerHTML = res[2];
            break;
            case('scissors'):
            resultDisplay.innerHTML = res[1];
            break;
        }
    }
    if(userChoise == 'scissors'){
        switch(computerChoises){
            case('rock'):
            resultDisplay.innerHTML = res[1];
            break;
            case('paper'):
            resultDisplay.innerHTML = res[0];
            break;
            case('scissors'):
           // resultDisplay.innerHTML = res[2];
           resultDisplay.innerHTML = res[2];
            break;
        }
    }
}
    

