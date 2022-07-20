import React from 'react';
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import Searchbar from './Searchbar';
import Darkmode from "../components/Darkmode";
import Language from "../components/Language";
import "../assets/Banner.css";
import "../assets/common.css";

export default function Banner() {
  return (
    <div className='banner-container'>
        <div className='div-logo-title'>
        <h1 className='logo-title'> DEV MONKUY </h1>
        </div>
        <div className='div-menu-banner'>
        <Searchbar />
        <Darkmode />
        <Language />
        </div>
        <div className='div-btn-signup-login'>
        {localStorage.getItem("loggedIn") ? (
              <div className="btn-div">
                <Logout />
              </div>
            ) : (
              <div className="btn-div">
                <NavLink to="/inscription" className="items">
                  <button className="button-member" type="button">
                    S'inscrire
                  </button>
                </NavLink>
                <NavLink to="/connexion" className="items">
                  <button className="button-connect" type="button">
                    Se connecter
                  </button>
                </NavLink>
              </div>
            )}
        </div>
        
    </div>
  )
}
