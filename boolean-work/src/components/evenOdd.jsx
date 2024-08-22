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
    <div>
    <div className="w3-card-4" style={{width:'60%',marginTop:'20px',}}>
 <header className="w3-container w3-blue">
   <h1>is this number Odd or Even?</h1>
 </header>

 <div className="w3-container">
 <form onSubmit={handleSubmit}>
         <label>Enter a number</label>
         <input
           type="number"
           value={num}
           onChange={(e) => setNum(e.target.value)}
           placeholder="Enter number"
         />
         <br />
         <br />
         
         <button type="submit">Check</button>
       </form>
 </div>

 <footer className="w3-container w3-blue" style={{marginTop:'30px'}}>
   <h5>{result}</h5>
 </footer>
</div>
 </div>
  );
}