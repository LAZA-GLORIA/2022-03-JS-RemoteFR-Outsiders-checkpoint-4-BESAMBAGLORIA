import React from 'react';
//import { NavLink } from "react-router-dom";
import {
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";
import "../assets/common.css";
import "../assets/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="reseauxsociaux">
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaInstagram size="27" color="black" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaFacebook size="27" color="black" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaYoutube size="27" color="black" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaLinkedin size="27" color="black" />
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR">
          <FaTwitter size="27" color="black" />
        </a>
      </div>
      <div className="copyright">
        <p>&copy;Mayaladev 2022 </p>
      {
        /**
         *        <p>
          <NavLink to="/mentions-legales">
            Mentions Légales
          </NavLink>
        </p>
         */
      }
      </div>

      <div>
        <p>
          {" "}
        Wildeusement votre,
        </p>
      </div>
    </footer>
  )
}
