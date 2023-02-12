import React from 'react'
import './Nav.css'
 import { useEffect, useState } from 'react'
 import logo from './netflixLogo.png'
function Nav() {
  
    const [show,handleShow]=useState(false);

    const transitionShow=()=>{
    if(window.scrollY>100)
   { handleShow(true);}
    else{ handleShow(false);}
    };

    useEffect(()=>{
   window.addEventListener("scroll" , transitionShow);
   return ()=>window.addEventListener("scroll" , transitionShow);

    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>

        <div className="nav_contents">
        <img className='nav_logo' src={logo} alt="" />
              <img className='nav_avatar' src={logo} alt="" />

        </div>
      
          
          
    </div>
  )
}

export default Nav
