import React from 'react';
import ButtonBack from '../components/ButtonBack';
import connexion from "../assets/img/connexion.png";
import "../assets/common.css";
import "../assets/Pageinconnue.css";

export default function PageInconnue() {
  return (
    <>
    <div className='nontrouve-container'>
    <ButtonBack />
    <h1> Page non trouvée </h1>
    
       <img src={connexion} className="img-404" alt="sellect-logo" />
    </div>
    </>
    
  )
}
