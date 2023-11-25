'use strict';

// Selecting elements from DOM and define them in variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('.current--0');
const current1El = document.getElementById('.current--1');
const NewGameBtn = document.querySelector('.btn--new');
const RollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');

console.log(player0El);

//setup the starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

//generate random dice numbers (1-6)
const RandomDiceRoll = Math.floor(Math.random() * 6) + 1;
console.log(RandomDiceRoll);
