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
    <div className="container">
      <div className="bottom-half">
        <div style={{ display: 'flex', marginLeft: "2%", padding: '20px' }}>
          <div className='first' style={{ border: "", height: "32vh", backgroundColor: "skyblue" }}>
            <h3>Which day of the week is this number?</h3>
            <form onSubmit={handleSubmit}>
              <label>Enter a number (1-7)</label>
              <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter a number" />
              <br></br>
              <button type="submit" style={{ marginLeft: "13%" }}>Check</button>
            </form>
            <div className='result' style={{ border: "5px solid blue", width: "102%", height: "25%", marginLeft: "-1%", marginTop: "9.2%", backgroundColor: "pink" }}>
              <p>{result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}