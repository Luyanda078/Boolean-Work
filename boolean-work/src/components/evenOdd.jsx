import React, { useState } from 'react';
import Footer from './footer';
export default function EvenOdd() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (num % 2 === 0) {
      setResult(`The number ${num} is even.`);
    } else {
      setResult(`The number ${num} is odd.`);
    }
  };
  return (
      <div className="bottom-half">
        <div style={{ display: 'flex', marginLeft: "2%", padding: '20px', marginTop:"50"}}>
          <div className='first' style={{borderRadius: '10px', height: "32vh", backgroundColor: "skyblue" }}>
            <h3>Is the number even or odd?</h3>
            <form onSubmit={handleSubmit}>
              <label>Enter a number</label>
              <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter a number" />
              <br></br><br></br>
              <button type="submit" style={{ marginLeft: "13%" }}>Check</button>
            </form>
            <div className='result' style={{ border: "5px solid blue", width: "102%", height: "25%", marginLeft: "-20%", marginTop: "50%", backgroundColor: "pink" }}>
              <p>{result}</p>
            </div>
          </div>
        </div>
      </div>
  );
}