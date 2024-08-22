import React, { useState, useEffect } from 'react';
// import './TrafficLight.css';

const Traffic = () => {
  const [color, setColor] = useState('red');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (color) {
        case 'red':
          setColor('yellow');
          setBackgroundColor('#FFC080'); // yellow-orange background
          break;
        case 'yellow':
          setColor('green');
          setBackgroundColor('#C6F7D0'); // light green background
          break;
        case 'green':
          setColor('red');
          setBackgroundColor('#FFC0CB'); // pink background
          break;
        default:
          setColor('red');
          setBackgroundColor('#FFFFFF'); // white background
      }
    }, 2000);
    setIntervalId(intervalId);
    return () => clearInterval(intervalId);
  }, [color]);

  return (
    <div className="traffic-light" style={{ backgroundColor }}>
      <div
        className="light"
        style={{
          backgroundColor: color,
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          margin: '20px',
        }}
      />
      <p className="color-name">{color}</p>
    </div>
  );
};

export default Traffic;