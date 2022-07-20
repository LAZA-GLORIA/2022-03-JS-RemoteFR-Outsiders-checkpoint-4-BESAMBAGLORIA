import React from 'react';
import Searchbar from './Searchbar';
import Darkmode from "../components/Darkmode";
import Language from "../components/Language";
import "../assets/Banner.css";
import "../assets/common.css";

export default function Banner() {
  return (
    <div className='banner-container'>
        <div className='div-icons-banner'>
        <Searchbar />
        <Darkmode />
        <Language />
        </div>
        
    </div>
  )
}
