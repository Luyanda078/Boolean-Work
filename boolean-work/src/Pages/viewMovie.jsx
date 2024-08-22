import React from 'react'

export default function viewMovie() {
    const viewfilms = {
        id: 1,
        title: "The Quantum Paradox",
        director: "Aria Novak",
        year: 2023,
        genre: "Sci-Fi",
        rating: 8.7,
        description: "A mind-bending journey through parallel universes as a physicist tries to find her way home.",
        imageUrl: "https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg"
    }
      
    
  return (
    <>
      <img src={viewfilms.imageUrl} alt='8888'className='back' style={{width:'330px', height:'360px'}}/>
      <h1>{viewfilms.title}</h1>
      <h1></h1>
      <button>View More</button>
    </>
  )
}
