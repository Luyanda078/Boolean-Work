
import React, { useState } from 'react';

export default function Card({film}) {
   
  
  return (
    <div>
      
      <div className="w3-card-4"style={{width:'85%', marginLeft:'20px',marginTop:'20px', bordeRadius: '10'}}>
    <header className="w3-container w3-blue" style={{color:'#E4E5E6'}}>
        <img src={film.imageUrl}style={{width:'100%', height:"375px",}}></img>
      <h1>{film.title}</h1>
      <p>{film.id}</p>
      <p>{film.director}</p>
      <p>{film.year}</p>
      <p>{film.genre}</p>
      <p>{film.rating}</p>
      <p>{film.description}</p>
      <p>{film.imageUrl}</p>
      <button>View More</button>
    </header>

   </div>

    </div>
  )
}
