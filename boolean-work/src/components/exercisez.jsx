
import React, { useState } from 'react';


export default function Exercisez() {
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
      <div style={{ position: 'relative' }}>
        <img src="https://th.bing.com/th/id/OIP.PLLWGq3IOvtphVdLG3zmGAHaEc?w=288&h=180&c=7&r=0&o=5&pid=1.7" alt="Exercise Image" style={{ width: '100vw', height: '50vh', objectFit: 'cover' }} />
        <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '36px', fontWeight: 'bold' }}>This is your exercise page</h1>
      </div>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center', height: '9vh' }}>
        <p> </p>
      </footer>
      <h3>What is the biggest number?</h3>
          <form onSubmit={handleSubmit}>
            <label>Num 1</label>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter num1" /><br></br><br></br>
            <label>Num 2</label>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter num2" /><br></br><br></br>
            <button type="submit">Calculate</button>
          </form>
          <p>{result}</p>
    </div>
    
  );
}
