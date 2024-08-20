import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navigation from './navigation';

export default function Layout() {
  return (
 
    <div>
           
           <p>Blah Blah Blah!!!</p>
           <Outlet/>
           <Footer/>
           <Navigation/>
    </div>
  )
}
