import React from 'react';
import { Link } from "react-router-dom";
import { GiFastBackwardButton } from "react-icons/gi";

export default function ButtonBack() {
  return (
    <div className='btnback-container'>
        <Link to="/">
        <button type=''>
        <GiFastBackwardButton size="27" color="black" /> Retour </button>
        </Link>
        
          
        
    </div>
  )
}
