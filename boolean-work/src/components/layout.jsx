import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navigation from './navigation';
import Footer from './footer';
export default function Layout() {
  return (
 
    <div>
           
           <Navigation/>
           <Outlet/>
           <Footer/>
       
    </div>
  )
}
