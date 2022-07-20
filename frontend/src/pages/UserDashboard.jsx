import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import UserNavbar from "../components/UserNavbar";
import Banner from "../components/Banner";
import { MainContext } from "../contexts/MainContext";
import "../assets/common.css";
import "../assets/AdminUser.css";

export default function UserDashboard() {
    const { isFirstConnection, setIsFirstConnection } = useContext(MainContext);
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!localStorage.getItem("loggedIn")) {
        navigate("/connexion");
      }
      if (isFirstConnection) {
        setTimeout(() => {
          setIsModal(true);
        }, 1000);
      }
    });
  
    const toggleModal = () => {
      setIsFirstConnection(false);
      setIsModal(false);
    };
  
  return (
    <>
    <UserNavbar />
    <Banner />
    <div>
        <h2>
        AdminUser
        </h2>
        <div>
        {isModal && (
        <Modal
          toggleModal={toggleModal}
          modalMessage="Votre inscription a bien été prise en compte !"
        />
      )}
        </div>
    </div>
    </>
    
  )
}
