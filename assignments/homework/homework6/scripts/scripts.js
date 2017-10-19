counter = 1;
hours = 15;
globalTimer = 150;
globalValue = -1;
globalGuesses = 10;
gameToggle = 0;
matching = 0;

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
            document.getElementById('b-output').innerHTML += "Guess #"+(10-globalGuesses)+": "+inputValue+" - Correct<br>";
            clearInterval(intervalControl);
            gameToggle = 0;
            globalTimer = 150;
            initializeGuessing();
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
        }, 1000);
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

var card = [{id: 1, image: "src/1.png", state: 0 },
    {id: 2, image: "src/2.png", state: 0 },
    {id: 3, image: "src/3.png", state: 0 },
    {id: 4, image: "src/4.png", state: 0 },
    {id: 5, image: "src/5.png", state: 0 },
    {id: 6, image: "src/6.png", state: 0 },
    {id: 7, image: "src/7.png", state: 0 },
    {id: 8, image: "src/8.png", state: 0 },
    {id: 9, image: "src/9.png", state: 0 },
    {id: 10, image: "src/10.png", state: 0 },
    {id: 11, image: "src/11.png", state: 0 },
    {id: 12, image: "src/12.png", state: 0 }
];

var game = new Array();

function shuffle(total) {
    game = new Array();
    console.log("Pairs: "+total);
    for(i = 0; i < total; i++) {
        game.push(card[i]);
        game.push(card[i]);
        console.log("Pushing: "+i);
        console.log(game.length);
    }
    console.log(game.length);
    for(j = 0; j < game.length; j++) {
        index = Math.floor(Math.random() * total);
        temp = game[j];
        game[j] = game[index];
        game[index] = temp;
    }
}
function potato(counterCard) {
    var arrayCards = [card[0], card[1], card[2], card[3], card[4], card[5], card[6], card[7], card[8], card[9], card[10], card[11], card[12], card[13], card[14], card[15]];
    // console.log(arrayCards[counterCard].id);
    document.getElementById('test-value').innerHTML = "You selected "+arrayCards[counterCard].id;
}

function matchStart() {
    duration = 1;
    matchesCount = 0;
    matchCards = document.getElementById('selectPairs').value;
    console.log("Match Start: Pairs = "+matchCards);
    counter = 0;
    if (true) {
        matchTimer = 0;
        matchCounter = setInterval(function() {
            matchTimer++;
        }, 1000);
        shuffle(matchCards);
        matching = 1;
        matchDisplay = '<table>';
        for (i = 0; i < 4; i++) {
            matchDisplay += '<tr>';
            for(j = 0; j<matchCards/2; j++) {
                matchDisplay += '<td id='+(counter++)+' height="100px" width="100px"><img src='+game[counter-1].image+' width=100px onclick="potato('+(game[counter-1].id)+')"/></td>';
                console.log(counter);
            }
            matchDisplay += '</tr>';
        }
        matchDisplay += '</table>';
    }
    document.getElementById('match-table').innerHTML = matchDisplay;
}
