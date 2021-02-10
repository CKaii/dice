import { findAllByRole } from '@testing-library/react';
import React, { useState } from 'react';
import Die from './Die';

function RollDice() {
  const [roll, setRoll] = useState({
    rollOne: 'one',
    rollTwo: 'two',
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    eleven: 0,
    twelve: 0,
  });

  const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

  function handleClick() {
    let newDieOne = numbers[Math.floor(Math.random() * numbers.length)];
    let newDieTwo = numbers[Math.floor(Math.random() * numbers.length)];
    setRoll({
      rollOne: newDieOne,
      rollTwo: newDieTwo,
    });
  }

  return (
    <div className="container">
      <h2>Dice Roll Simulator</h2>
      <div className="dice">
        <Die number={roll.rollOne} />
        <Die number={roll.rollTwo} />
      </div>
      <button onClick={handleClick}>Roll Dice</button>
      <h3>Dice one rolled a {roll.rollOne}</h3>
      <h3>Dice two rolled a {roll.rollTwo}</h3>
      <br />
      <h3>Amount of times rolled: </h3>
      <h3>
        {' '}
        Two: {roll.two} Three: {roll.three} Four: {roll.four} Five: {roll.five}{' '}
        Six: {roll.six} Seven: {roll.seven} Eight: {roll.eight} Nine:{' '}
        {roll.nine} Ten: {roll.ten} Eleven: {roll.eleven} Twelve: {roll.twelve}
      </h3>
    </div>
  );
}

export default RollDice;
