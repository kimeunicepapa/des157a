(function(){
    'use strict'
    console.log('reading js');


    //for rules overlay

    document.querySelector('.open').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('rulesOverlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('rulesOverlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        document.getElementById('rulesOverlay').className = 'hidden';
    }
    });

    //game

    const startGame = document.getElementById('startgame');
        const gameControl = document.getElementById('gamecontrol');

        const game = document.getElementById('game');
        
        const score = document.getElementById('score');
        const score1 = document.getElementById('score1');
        const score2 = document.getElementById('score2');

        const actionArea = document.getElementById('actions');

        //sounds variables
        const winSound = new Audio('sounds/win.mp3');
        const plantSound = new Audio('sounds/plant.mp3');
        const waterSound = new Audio('sounds/water.mp3');

        const gameData = {
            dice1: ['images/beet0.png', 'images/beet1.png', 'images/beet2.png', 'images/beet3.png', 'images/beet4.png', 'images/beet5.png'],
            dice2: ['images/radish0.png', 'images/radish1.png', 'images/radish2.png', 'images/radish3.png', 'images/radish4.png', 'images/radish5.png'],
            players: ['PLAYER 1', 'PLAYER 2'],
            score: [0,0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 30
        }



        startGame.addEventListener("click", function(){
            //randomly set game index here...
            gameData.index = Math.round(Math.random());
            console.log(`index: ${gameData.index}`);

            // gameControl.innerHTML = '<h2></h2>';
            gameControl.innerHTML = '<button id="quit">Wanna Quit?</button>';

            document.getElementById('quit').addEventListener("click", function(){
                location.reload();
            });

            // console.log("set up the turn!");
            setUpTurn();
        });

        function setUpTurn() {
            game.innerHTML = `<h2>Your turn, ${gameData.players[gameData.index]}</h2>`;
            actionArea.innerHTML = '<button id="roll">Start hoping for new sprouts</button>';
            document.getElementById('roll').addEventListener('click', function(){

                // console.log("roll the dice!");
                throwDice();
                
            });
        }

        function throwDice(){
            actionArea.innerHTML = '';
            //get random values for 0-5 for the score
            gameData.roll1 = Math.floor(Math.random() * 6); //using ceil could resul in a zero
            gameData.roll2 = Math.floor(Math.random() * 6);
            game.innerHTML = `<h2>${gameData.players[gameData.index]}'s turn</h2>`;

            //put the dice sprouts on the screen
            game.innerHTML += `<div id="plants"><img src="${gameData.dice1[gameData.roll1]}"><img src="${gameData.dice2[gameData.roll2]}"></div>`;
            plantSound.play();


            gameData.rollSum = gameData.roll1 + gameData.roll2;
            console.log(gameData.rollSum);
            // gameData.rollSum = 2;

            //if two 0's are rolled(both sides empty)...
            if(gameData.rollSum === 0){
                console.log("snake eyes were rolled");
                actionArea.innerHTML += '<p>Oh no! You forgot to water everything, back to 0</p>';
                waterSound.play();
                gameData.score[gameData.index] = 0;

                //switch players
                gameData.index ? (gameData.index = 0): (gameData.index = 1);

                //show the current score
                showCurrentScore();

                setTimeout(setUpTurn, 2000);
            }
            //if either side is 0(empty)...
            else if(gameData.roll1 === 0 || gameData.roll2 === 0){
                console.log("one of the two dice was a 0");

                //switch players
                gameData.index ? (gameData.index = 0): (gameData.index = 1);

                actionArea.innerHTML += `<p>You forgot to water one of the sides, switching to ${
                    gameData.players[gameData.index]
                } </p>`;
                waterSound.play();

                setTimeout(setUpTurn, 5000);
            } 
            //if neither side is 0(empty)...
            else {
                console.log("the game proceeds");
                gameData.score[gameData.index] += gameData.rollSum;
                actionArea.innerHTML = '<button id="rollagain">Hope</button><button id="pass">Pass</button>';

                document.getElementById('rollagain').addEventListener('click', function(){
                    throwDice();
                });

                document.getElementById('pass').addEventListener('click', function(){

                    //switch players
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                })
                checkWinningCondition();
            }

        }

        function checkWinningCondition() {
            if(gameData.score[gameData.index] > gameData.gameEnd) {
                score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} little plants!</h2>`
                winSound.play();

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game?";
            }
            else {
                //show current score
                showCurrentScore();
                
            }
        }

        function showCurrentScore(){
                    score1.innerHTML = `<h3>${gameData.players[0]}</h3><p>${gameData.score[0]}</p>`;
                    score2.innerHTML = `<h3>${gameData.players[1]}</h3><p>${gameData.score[1]}</p>`
        }



}());