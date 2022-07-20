import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaBars  } from "react-icons/fa";
import mayaladev from '../assets/img/mayaladev.svg';
import "../assets/UserNavbar.css";
import "../assets/common.css";

export default function UserNavbar() {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (

<div className='div-btn-signup-login'>
<div className='div-nav'>
    <div className='nav-center'>
    <div className='nav-header'>
          <img src={mayaladev} className='logo-mayaladev' alt='logo mayaladev' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <nav className='links' ref={linksRef}>
            {localStorage.getItem("loggedIn") && (
                <>
              <NavLink
              to="/"
              className={(items) =>
                items.isActive ? "items-activated" : "items"
              }
            >
            Deconnexion
        </NavLink>
        <NavLink
        to="/projets"
        className={(items) =>
          items.isActive ? "items-activated" : "items"
        }
      >
      Projets
  </NavLink>
  <NavLink
        to="/cheat"
        className={(items) =>
          items.isActive ? "items-activated" : "items"
        }
      >
      Cheat
  </NavLink>
  </>
            )
      }
        </nav>
        </div> 
    </div>
    </div>
    </div>
  )
}
