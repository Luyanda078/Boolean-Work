import React from 'react'
import Card from '../components/card'
export default function Movies({movie}) {
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(3,1fr)',
      

    }}>
      {movie.map(

        (item,index)=>(<Card key={item.id} film={item} />)

        )}
    
    </div>
  )
}
