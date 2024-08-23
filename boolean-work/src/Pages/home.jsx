import React, { useState } from 'react';
import './Home.css';

const colors = [
  '#FFFFFF',
  '#ECE9E6',
  '#DAE2F8',
  '#D6A4A4',
  '#859398',
  '#D7DDE8',
  '#E7E9BB',
  '#cbcaa5',
  '#ACBB78',
  '#E4E5E6',
];

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <div className="home-container" style={{ backgroundColor, height: '100vh', width: '100vw', display: 'flex', justifyContent: 'space-between' }}>
      <div className="content" style={{marginTop:'230px'}}>
        <div className="features">
          <h1 style={{fontWeight:"bold", fontSize:"56px"}}>The best way<br></br> to showcase <br></br>your project</h1>
          <ul>
            <li>Exercises for learning and practice</li>
            <li>Interactive and engaging content</li>
            <li>Easy to use and navigate</li>
          </ul>
        </div>

        <div className="call-to-action">
          <h2>Get Started Today!</h2>
          <button>Start Now</button>
        </div>
      </div>

      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1577401239170-897942555fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9iamVjdHMlMjBpc29sYXRlZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Hero Image"
          style={{
            width: '30vw',
            height: '30vh',
            objectFit: 'cover',
            borderRadius: '10px',
            marginTop:'150px'
          }}
        />
      </div>
    </div>
  );
}