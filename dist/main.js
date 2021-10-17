// defining ui variables
const newGame = document.querySelector('#new-game');
const player1 = document.querySelector('#player-1');
const player2 = document.querySelector('#player-2');
const img = document.querySelector('#img');
const rollDice = document.querySelector('#roll-dice');
const hold = document.querySelector('#hold');
const pl1Point = document.querySelector('#pl-1-point');
const pl2Point = document.querySelector('#pl-2-point');
const currentPl1 = document.querySelector('#current-pl1');
const currentPl2 = document.querySelector('#current-pl2');

//app variables
const currentPlayer = document.querySelector('.active');
let scorePl1 = 0;
let scorePl2 = 0;
let currentScorePl1 = 0;
let currentScorePl2 = 0;
let rand;

// events
newGame.addEventListener('click',setDefault);
rollDice.addEventListener('click', game);
hold.addEventListener('click', holdFunc);

// perduces the game
function game() {

    rand = Math.trunc((Math.random() * 6) + 1);

    img.src = `dice-${rand}.png`;
    if (rand === 1) {
        if (player1.classList.contains('active')) {
            player1.classList.remove('active');
            player2.classList.add('active');
            currentScorePl1 = 0;
            currentPl1.innerHTML = 0;
        } else if (player2.classList.contains('active')) {
            player2.classList.remove('active');
            player1.classList.add('active');
            currentScorePl2 = 0;
            currentPl2.innerHTML = 0;
        }
    } else {
        if (player1.classList.contains('active')) {
            currentScorePl1 += rand;
            currentPl1.innerHTML = currentScorePl1;
        } else if (player2.classList.contains('active')) {
            currentScorePl2 += rand;
            currentPl2.innerHTML = currentScorePl2;
        }
    }
}

// holds the scorse
function holdFunc() {
    if (player1.classList.contains('active')) {
        scorePl1 += currentScorePl1;
        pl1Point.innerHTML = scorePl1;
        player1.classList.remove('active');
            player2.classList.add('active');
            currentScorePl1 = 0;
            currentPl1.innerHTML = 0;
    } else if (player2.classList.contains('active')) {
        scorePl2 += currentScorePl2;
        pl2Point.innerHTML = scorePl2;
        player2.classList.remove('active');
            player1.classList.add('active');
            currentScorePl2 = 0;
            currentPl2.innerHTML = 0;
    }
}


// reloads everything
function setDefault(){
    location.reload();
}
