import React from 'react';

export default function Exercisez() {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <img src="https://th.bing.com/th/id/OIP.PLLWGq3IOvtphVdLG3zmGAHaEc?w=288&h=180&c=7&r=0&o=5&pid=1.7" alt="Exercise Image" style={{ width: '100vw', height: '50vh', objectFit: 'cover' }} />
        <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '36px', fontWeight: 'bold' }}>This is your exercise page</h1>
      </div>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center', height: '15vh' }}>
        <p> </p>
      </footer>
    </div>
  );
}
