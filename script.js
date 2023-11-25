'use strict';

// Selecting elements from DOM and define them in variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('.current--0');
const current1El = document.getElementById('.current--1');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');

//FUNCTIONS

const newGame = () => {
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//my function without toggle
// const switchPlayer = () => {
//   if (player0El.classList.contains('player--active')) {
//     player0El.classList.remove('player--active');
//     player1El.classList.add('player--active');
//   } else {
//     player0El.classList.add('player--active');
//     player1El.classList.remove('player--active');
//   }
// };

//with toggle
const switchPlayer = () => {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollDice = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    document.querySelector('.dice').src = 'dice-1.png';
    diceEl.classList.remove('hidden');
    switchPlayer();
  } else {
    document.querySelector('.dice').src = `dice-${randomNumber}.png`;
    diceEl.classList.remove('hidden');
  }
};

//setup the starting conditions
newGame();

newGameBtn.addEventListener('click', newGame);
holdScoreBtn.addEventListener('click', switchPlayer);
rollDiceBtn.addEventListener('click', rollDice);
