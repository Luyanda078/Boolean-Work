import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
    <div className="w3-bar w3-green">
    <Link to="/home" className="w3-bar-item w3-button" >Home</Link>
    <Link to="/exercisez" className="w3-bar-item w3-button" >Exercisez</Link>
    <Link to="/traffic" className="w3-bar-item w3-button" >Traffic</Link>
    <Link to="/myMovies" className="w3-bar-item w3-button" >Movies</Link>
    <Link to="/contact" className="w3-bar-item w3-button" >Contact</Link>
   </div>
       </>
  )
}
