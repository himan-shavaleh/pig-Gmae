// defining ui variables
const newGame = document.querySelector('#new-game');
const img = document.querySelector('#img');
const rollDice = document.querySelector('#roll-dice');
const hold = document.querySelector('#hold');


//app variables
const currentPlayer = document.querySelector('.active');
let scores = [0,0];
let activPlayer = 1;
let currentScore = 0;


init();
// events
newGame.addEventListener('click', setDefault);
rollDice.addEventListener('click', game);
hold.addEventListener('click', holdFunc);

// perduces the game
function game() {
   const rand = Math.trunc((Math.random() * 6) + 1);
    img.classList.remove('hidden');
    img.src = `dice-${rand}.png`;
    if (rand === 1) {
        changePlayer();
    } else {
        
        currentScore += rand;
        document.querySelector(`#current-pl${activPlayer}`).innerHTML = currentScore;
        
    }
}

// holds the scorse
function holdFunc() {
    
    scores[activPlayer-1]+=currentScore;
    document.getElementById(`pl-${activPlayer}-point`).innerHTML = scores[activPlayer-1];
    
    if(scores[activPlayer-1]>=100){
        document.getElementById(`player-${activPlayer}`).style.background = '#22cc39';
        document.querySelector('.message').innerHTML = `Player ${activPlayer} Win 🎈`;
    }
    changePlayer();
}


// reloads everything
function setDefault() {
init();
}
// change active player
function changePlayer(){
    currentScore = 0;
    document.querySelector(`#current-pl${activPlayer}`).innerHTML = 0;
    document.querySelector(`#player-${activPlayer}`).classList.toggle('active');
    activPlayer === 1 ? activPlayer = 2 : activPlayer = 1;
    document.querySelector(`#player-${activPlayer}`).classList.toggle('active');
}

function init(){
    img.classList.add('hidden');

    activPlayer = 1;
    scores =[0,0];
    currentScore=0;
    document.querySelector(`#player-${activPlayer}`).classList.add('active');
    document.querySelector(`#player-${activPlayer+1}`).classList.remove('active');
    document.querySelector(`#pl-${activPlayer}-point`).innerHTML = 0; 
    document.querySelector(`#pl-${activPlayer+1}-point`).innerHTML = 0; 
    document.querySelector(`#current-pl${activPlayer}`).innerHTML = 0; 
    document.querySelector(`#current-pl${activPlayer+1}`).innerHTML = 0; 
}