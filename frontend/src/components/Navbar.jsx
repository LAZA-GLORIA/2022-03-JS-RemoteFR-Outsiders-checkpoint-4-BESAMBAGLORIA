import React, { useState, useRef, useEffect } from 'react';
import { FaBars  } from "react-icons/fa";
import { links } from '../data/datanavbar';
import donkuydev from '../assets/img/donkuydev.svg';
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
    <nav>
    <div className='navbar-container'>
    <div className='navbar-header'>
          <img src={donkuydev} className='logo donkuy dev' alt='logo' />
          <button className='navbar-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/**
         */
}
        <h1> Le blog pour les développeurs web pommés </h1>
    
    </div>
    </nav>
  )
}
