import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaBars  } from "react-icons/fa";
import mayaladev from '../assets/img/mayaladev.svg';
import "../assets/Navbar.css";
import "../assets/common.css";


export default function Navbar() {
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
    <div className='div-nav'>
    <div className='nav-center'>
    <div className='nav-header'>
          <img src={mayaladev} className='logo-mayaladev' alt='logo mayaladev' />
          <h1> MAYA LA DEV</h1>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars color="yellow" height={30}/>
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <nav className='links' ref={linksRef}>
          <NavLink
                  to="/connexion"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                Connexion
            </NavLink>
          <NavLink
                  to="/inscription"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                Inscription
            </NavLink>
            <NavLink
                  to="/blog"
                  className={(items) =>
                    items.isActive ? "items-activated" : "items"
                  }
                >
                Blog
            </NavLink>
          </nav>
        </div> 
    </div>
    </div>
  )
}
