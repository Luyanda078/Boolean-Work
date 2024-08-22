import React, { useState } from 'react';
import Footer from './footer';
export default function Weekdays() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = num % 7;
    setResult(`The number ${num} corresponds to ${daysOfWeek[dayIndex]}.`);
  };
  return (
    <div>
       <div className="w3-card-4" style={{width:'50%', marginTop:'20px'}}>
    <header className="w3-container w3-blue">
      <h1>Which day of the week is this number?</h1>
    </header>

    <div className="w3-container">
    <form onSubmit={handleSubmit}>
              <label>Enter a number (1-7)</label>
              <br></br>
              <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter a number" />
              <br></br>
              <button type="submit" style={{ marginLeft: "13%" }}>Check</button>
            </form>
            <br></br>
    </div>

    <footer className="w3-container w3-blue">
      <h5>{result}</h5>
    </footer>
  </div>
    </div>
  );
}