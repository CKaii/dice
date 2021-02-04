import React, { useState } from 'react';
import Die from './Die';

function RollDice() {
  const [random, setRandom] = useState('3');

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setRandom(randomNumber);
    console.log(randomNumber);
    console.log(random);
  }

  return (
    <div>
      <Die number={random} />
      {random === '7' ? (
        <h2>The die only goes up to 6</h2>
      ) : (
        <button onClick={handleClick}>Random Number</button>
      )}
    </div>
  );
}

export default RollDice;
