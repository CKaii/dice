import React, { useState } from 'react';
import Die from './Die';

function RollDice() {
  const [roll, setRoll] = useState({ rollOne: 'one', rollTwo: 'two' });

  const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

  function handleClick() {
    let newDieOne = numbers[Math.floor(Math.random() * numbers.length)];
    let newDieTwo = numbers[Math.floor(Math.random() * numbers.length)];
    setRoll({ rollOne: newDieOne, rollTwo: newDieTwo });
  }

  return (
    <div className="container">
      <div className="dice">
        <Die number={roll.rollOne} />
        <Die number={roll.rollTwo} />
      </div>
      <button onClick={handleClick}>Roll Dice</button>
    </div>
  );
}

export default RollDice;
