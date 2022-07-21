import React from 'react';
import { Link } from "react-router-dom";
import { GiFastBackwardButton } from "react-icons/gi";
import "../assets/Buttonback.css";
import "../assets/common.css";

export default function ButtonBack() {
  return (
    <div className='btnback-container'>
        <Link to="/">
        <button type='' className='btn-back'>
        <GiFastBackwardButton size="27" color="black" /> Retour </button>
        </Link>        
    </div>
  )
}
