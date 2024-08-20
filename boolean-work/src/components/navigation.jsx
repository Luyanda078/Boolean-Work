import React from 'react'

export default function Navigation() {
  return (
    <>
    <div className="w3-bar w3-green">
    <Link to="/home" className="w3-bar-item w3-button" >Home</Link>
    <Link to="/exercise" className="w3-bar-item w3-button" >Exercise</Link>
    <Link to="/trafficLight" className="w3-bar-item w3-button" >TrafficLight</Link>
   </div>
       </>
  )
}
