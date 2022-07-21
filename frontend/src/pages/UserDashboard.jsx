import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Footer from "../pages/Footer";
import Banner from "../components/Banner";
import { MainContext } from "../contexts/MainContext";
import "../assets/common.css";
import "../assets/UserDashboard.css";
import { MdWavingHand } from 'react-icons/md';

export default function UserDashboard() {
    const { isFirstConnection, setIsFirstConnection } = useContext(MainContext);
    const [setIsModal] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!localStorage.getItem("loggedIn")) {
        navigate("/connexion");
      };
      if (isFirstConnection) {
        setTimeout(() => {
          setIsModal(true);
        }, 1000);
      }
    });
  
  return (
    <>
    <UserNavbar />
    <Banner />
    <div className='userdashboard-container'>
        <h2>
        AdminUser
        </h2>
        <div>
  HELLO
        </div>
    </div>
    <Footer />
    </>
    
  )
}
