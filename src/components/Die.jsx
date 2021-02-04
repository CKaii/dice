import React from 'react';

function Die(props) {
  return (
    <div className="die">
      <i className={`fas fa-dice-${props.number}`}></i>
    </div>
  );
}

export default Die;
