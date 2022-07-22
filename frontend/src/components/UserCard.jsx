import React, { useContext } from "react";
import API from "../services/api";
import { MainContext } from "../contexts/MainContext";
import "../assets/common.css";
import "../assets/Usercard.css";

export default function UserCard( { user }) {
    const { setDeleteUserModal, setIsUserDeleted } = useContext(MainContext);

    const handleDelete = (e) => {
        // eslint-disable-next-line no-alert
        return window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")
          ? API.delete(`/users/${user.id}`)
              .then(() => {
                setIsUserDeleted(true);
                setTimeout(() => {
                setDeleteUserModal(true);
        }, 500);
              })
              .catch((err) => console.error(err))
          : e.preventDefault();
      };

  return (
    <div className="usercard">
      <details className="usercard-details">
        <summary className="usercard-summary">
          <p> <span>Nom: </span>{user.firstname} </p> 
          <p> <span>Prénom: </span>{user.lastname}</p>
        </summary>
        <div className="usercard-container">
          <div className="usercard-details">
          <p>
              <span>Téléphone:</span> {user.phoneNumber}
            </p>
            <p>
              <span>Email:</span> {user.email}
            </p>
            <p>
              <span>Ville:</span> {user.city}
            </p>
            <p>
              <span>A connu le site par:</span> {user.question}
            </p>
            <p>
              <span>Date d'inscription:</span> {user.signupDate}
            </p>
          </div>
          <div className="usercard-btn">
            <button type="button" onClick={handleDelete} className="deleteuser-btn">
              Supprimer cet utilisateur
            </button>
          </div>
        </div>
      </details>
    </div>
  )
}
