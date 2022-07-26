import React from 'react';
import Darkmode from "../components/Darkmode";
import Language from "../components/Language";
import "../assets/Banner.css";
import "../assets/common.css";

export default function Banner() {
  return (
  <>
    <div className='banner-container'>
        <div className='div-searchbar'>
        </div>
        <div className="div-darkmode">
        <Darkmode />
        </div>
        <div className="div-language">
        <Language />
        </div>   
    </div>
    <div className="trait"><hr /></div> 
  </>
  )
}
