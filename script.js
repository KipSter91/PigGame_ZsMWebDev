'use strict';

// Selecting elements from DOM and define them in variables
const current1El = document.getElementById('current--1');
const current0El = document.getElementById('current--0');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer;

//FUNCTIONS
const newGame = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.remove('hidden');
  rollDiceBtn.classList.remove('hidden');
  holdScoreBtn.classList.remove('hidden');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
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
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling the dice logic
const rollDice = () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);

  document.querySelector('.dice').src = `dice-${randomNumber}.png`;
  diceEl.classList.remove('hidden');

  if (randomNumber === 1) {
    switchPlayer();
  } else {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
};

//holding button function and hold the current score
const holdCurrentScore = () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    rollDiceBtn.classList.add('hidden');
    holdScoreBtn.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    diceEl.classList.add('hidden');
  } else {
    switchPlayer();
  }
};

//setup the starting conditions
newGame();

newGameBtn.addEventListener('click', newGame);
holdScoreBtn.addEventListener('click', holdCurrentScore);
rollDiceBtn.addEventListener('click', rollDice);
