import React from 'react'
import { Link, useParams } from 'react-router-dom'
export default function viewMovie({viewfilms}) {
  
      const{id}=useParams()
      console.log(id)

    
  return (
    <>
      <img src={viewfilms[id].imageUrl} alt='8888'className='back' style={{width:'330px', height:'360px'}}/>
      <p>{viewfilms[id].title}</p>
      <p>{viewfilms[id].director}</p>
      <p>{viewfilms[id].year}</p>
      <p>{viewfilms[id].rating}</p>
      <p>{viewfilms[id].description}</p>
      <p>{viewfilms[id].imageUrl}</p>
      <h1></h1>
      <Link to={".."}><button>Back</button></Link>
    </>
  )
}
