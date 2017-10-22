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
var matchVariable = 0;
var matchFirst;
var matchesCount;
var matchCounter;
var cardOne;
var matching = 0;
var counter = 1;
var that;
var playback;
var matchTimer;

function flip(target) {
    $(target).toggleClass('flipping');
}

function shuffle(total) {
    game = new Array();
    console.log("Shuffle: Adding "+total+" pairs of cards to the deck.");
    for(i = 1; i <= total; i++) {     
        string = 'src/'+i+'.png';
        game.push({id: i, image: string, state: 3});
        game.push({id: i, image: string, state: 3});
    }
    //console.log(game.length);
    console.log("Shuffle: Shuffling deck.");
    for(j = 0; j < game.length; j++) {
        index = Math.floor(Math.random() * total);
        temp = game[j];
        game[j] = game[index];
        game[index] = temp;
    }
}

function potato(counterCard, target) {
    console.log("Clicked on "+counterCard+" whose state is "+game[counterCard].state);
    if (game[counterCard].state == 0) {
        matchVariable++;
        if (matchVariable%2==1) {
            matchFirst = game[counterCard];
            matchFirst.state = 1;
            cardOne = counterCard;
            console.log("Card is now selected.");
            // Flip Animation for Card 1
            flip(target);
            that = target;
        } else {
            console.log("This is the second card.");
            // Flip Animation for Card 2
            flip(target);
            if (matchFirst.id == game[counterCard].id) {
                matchesCount++;
                matchFirst.state = 2;
                game[counterCard].state = 2;
                playback = new Audio('./src/audio/'+game[counterCard].id+'.mp3');
                playback.play();
                console.log("That's a match! "+game[counterCard].id);
                console.log("Matches: "+matchesCount+"/"+document.getElementById('selectPairs').value);
                if (matchesCount==document.getElementById('selectPairs').value) {
                    console.log("All matches found");
                    matchEnd(1);
                }
            } else {
                for (i = 0; i < game.length; i++) {
                    game[i].state += 3;
                }   
                // Flip Animation for Card 1 and 2
                setTimeout(function() {
                    $(target).toggleClass('flipping');
                    $(that).toggleClass('flipping');
                    for (i = 0; i < game.length; i++) {
                        game[i].state-=3;
                    }   
                    matchFirst.state = 0;
                    game[counterCard].state = 0;
                }, 1000);
                console.log("This is not a match, resetting cards");
            }
        }
    } else if (game[counterCard].state == 2) {
        console.log("This card is already matched.");
    } else if (game[counterCard].state == 1) {
        console.log("Card is already selected.");
    } else if (game[counterCard].state >= 3) {
        // console.log("Card is not available for click.");
    }
    //console.log("Card state is: "+game[counterCard].state);
}

function matchStart() {
    if (matching == 0) {
        $('#match-controls').hide('slow');
        $('.modal-background').hide();
        matchesCount = 0;
        matchCards = document.getElementById('selectPairs').value;
        waitFlip = document.getElementById('selectDifficulty').value;
        console.log("Match Start: Pairs = "+matchCards);
        counter = 0;
        if (matchCards == 8) {
            matchTimer = 120;
        } else if (matchCards == 10) {
            matchTimer = 150;
        } else if (matchCards == 12) {
            matchTimer = 180;
        }
        
        matchCounter = setInterval(function() {
            document.getElementById('matching-timer').innerHTML = "Time Left: " + matchTimer--;
            if (matchTimer < 0) {
                clearInterval(matchCounter);
                matchEnd(0);
            }
        }, 1000);
        shuffle(matchCards);
        matching = 1;
        matchDisplay = '<table class="match-table-ele">';
        for (i = 0; i < 4; i++) {
            matchDisplay += '<tr>';
            for(j = 0; j<matchCards/2; j++) {
                matchDisplay += '<td class="match-cell" id='+(counter++)+'><div class="flip-region" onclick="potato('+(counter-1)+', this)"><div class="flip"><div class="card-front"><img src="'+game[counter-1].image+'"/></div><div class="card-back"><img src="src/card-back.png"/></div></div></div></td>';
                // console.log(counter);
            }
            matchDisplay += '</tr>';
        }
        matchDisplay += '</table>';
        document.getElementById('match-table').innerHTML = matchDisplay;
        setTimeout(function() {
            $('.flip-region').toggleClass('flipping');
            for (i = 0; i < game.length; i++) {
                game[i].state = 0;
            }     
        },waitFlip*1000);
    } else {
        console.log("Game already running.");
    }
    
}

function matchEnd(result) {
    clearInterval(matchCounter);
    for (i = 0; i < game.length; i++) {
        game[i].state = 3;
    }
    switch (document.getElementById('selectDifficulty').value) {
        case '3':
            difficulty = "hard";
            break;
        case '5':
            difficulty = "normal";
            break;
        case '8':
            difficulty = "easy";
            break;
        default:
            break;
    }
    switch (document.getElementById('selectPairs').value) {
        case '8':
            startTimer = 120;
            break;
        case '10':
            startTimer = 150;
            break;
        case '12':
            startTimer = 180;
            break;
        default:
            break;
    }
    if (result == 1) {
        resultString = "You Win!<br>";
    } else {
        resultString = "You Lose! :(<br>";
    }
    resultString += "You played on "+difficulty+" matching "+matchesCount+"/"+document.getElementById('selectPairs').value+" pairs in "+(startTimer-matchTimer-1)+"s.<br>";
    resultString += 'Number of Pairs: <select name="pairOrders" id="selectPairs"><option value="8">8</option><option value="10">10</option><option value="12">12</option></select>';
    resultString += 'Difficulty: <select name="difficulty" id="selectDifficulty"><option value="8">Easy</option><option value="5">Normal</option><option value="3">Hard</option></select>';
    resultString += '<button onclick="matchStart()">Ready!</button>';
    document.getElementById('modal').innerHTML = resultString;
    matching = 0;
    $('.modal-background').show();
}