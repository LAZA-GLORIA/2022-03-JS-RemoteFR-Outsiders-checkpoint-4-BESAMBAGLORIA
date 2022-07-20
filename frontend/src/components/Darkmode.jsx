import React from 'react';
import { MdDarkMode } from "react-icons/md";
//import { BsSun } from "react-icons/bs";
import "../assets/Darkmode.css";
import "../assets/common.css";


export default function Darkmode() {
  return (
    <div className='btn-language-container'>
    <MdDarkMode size="27" color="black" />
     {/**
    <div className='btn-language-container'>
    <MdDarkMode size="20" color="black" />
    </div>
   */}
  </div>
 
  )
}
