
import React, { useState } from 'react';

export default function BiggestNum() {
    const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const biggestNumber = Math.max(num1, num2);
    setResult(`The biggest number is: ${biggestNumber}`);
  };
  return (
    <div>
      
      <div className="w3-card-4"style={{width:'80%', marginLeft:'20px',marginTop:'20px'}}>
    <header className="w3-container w3-blue">
      <h1>Chucky</h1>
    </header>

    <div className="w3-container">
    <form onSubmit={handleSubmit}>
            <label>Num 1</label>
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Enter num1"
            />
            <br />
            <br />
            <label>Num 2</label>
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Enter num2"
            />
            <br />
            <br />
            <button type="submit">Calculate</button>
          </form>
    </div>

    <footer className="w3-container w3-blue">
      <h5>{result}</h5>
    </footer>
  </div>
  <footer>
    
  </footer>
    </div>
  )
}
