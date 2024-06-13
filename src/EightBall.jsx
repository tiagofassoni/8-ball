import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setMessage(msg);
    setColor(color);
  };

  return (
    <div className="EightBall" style={{ backgroundColor: color }} onClick={handleClick}>
      <div className="EightBall-message">{message}</div>
    </div>
  );
};

export default EightBall;