counter = 1;
hours = 15;
globalTimer = 150;
globalValue = -1;
globalGuesses = 10;
gameToggle = 0;

function tabSwap(tabName, contentSet) {
    $('#'+contentSet).children().hide();
    $('#'+tabName).show();
}
function employeeWage() {
    output = '<table><tr><th>Employee</th><th>Hours</th><th>Wage</th></tr>';
    inputPrompt = 0;
    count = 1;
    overtimeLimit = 40;
    hourlyWage = 15;
    overtimeRate = 1.5;
    total = 0;
    while (inputPrompt > -1) {
        inputPrompt = prompt("Please enter the number of hours for Employee "+count+" (-1 to cancel)");
        if (inputPrompt >= 0) {
            if (inputPrompt > 40) {
                wage = overtimeLimit*hourlyWage + (inputPrompt - overtimeLimit) * (hourlyWage * overtimeRate);
            } else {
                wage = inputPrompt*hourlyWage;
            }
            output+='<tr><td>Employee '+count+'</td><td>'+inputPrompt+' Hours</td><td>$'+wage+'</td></tr>';
            count++;
            total += wage;
        }
    }
    count--;
    output+='</table><br>The total wage for '+count+' employees was $'+total;
    document.getElementById('table-content').innerHTML = output;
}
function guessingGame() {
    inputValue = document.getElementById('numberGuess').value;
    if(inputValue == null) {
        document.getElementById('b-print').innerHTML = "Please enter a number!";
    } else {
        if (inputValue == globalValue) {
            document.getElementById('b-print').innerHTML = "You did it!";
            clearInterval(intervalControl);
            gameToggle = 0;
        } else if (inputValue > globalValue) {
            document.getElementById('b-print').innerHTML = "Too high!";
            globalGuesses--;
            document.getElementById('b-output').innerHTML += "Guess #"+(10-globalGuesses)+": "+inputValue+" - Too High<br>";
        } else {
            document.getElementById('b-print').innerHTML = "Too low!";
            globalGuesses--;
            document.getElementById('b-output').innerHTML += "Guess #"+(10-globalGuesses)+": "+inputValue+" - Too Low<br>";
        }
    }
}
function initializeGuessing() {
    if(globalTimer > 149 || gameToggle == 0) {
        gameToggle = 1;
        intervalControl = setInterval(function() {
            if (globalTimer < 0) {
                clearInterval(intervalControl);
                document.getElementById('b-print').innerHTML = "You ran out of time! Value was "+globalValue;
                globalTimer = 150;
                globalGuesses = 10;                
            } else {
                document.getElementById('time-id').innerHTML = globalTimer--;
            }            
        }, 50);
        globalValue = Math.floor(Math.random() * 100);
        globalGuesses = 10;
        // document.getElementById('b-print-2').innerHTML = "Value: "+globalValue;
    } else if (globalGuesses == 0) {
        document.getElementById('b-print').innerHTML = "You ran out of guesses! Value was "+globalValue;
        document.getElementById('b-output').innerHTML = "Output<hr>";
        globalValue = Math.floor(Math.random() * 100);
        clearInterval(intervalControl);
        gameToggle = 0;
        globalGuesses = 10;
    }
    guessingGame();
}

function matchCards() {
    
}