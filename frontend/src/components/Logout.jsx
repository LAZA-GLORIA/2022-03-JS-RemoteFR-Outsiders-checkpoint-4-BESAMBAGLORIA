import React from 'react';
import { toast  } from 'react-toastify';
import API from "../services/api";
import "../assets/common.css";
import "../assets/Logout.css";

export default function Logout() {

    const handleLogout = (e) => {
        e.preventDefault();
        API.get(`/logout/users`, 
        {
          withCredentials: true,
        })
          .then((res) => {
            if (res.status === 200) {
              toast.success("A bientot !");
              localStorage.clear(); 
              window.location = "/";  
            }
          })
          .catch((err) => console.error(err));
      };
  return (
    <div>
        <button
        type="button"
        className="btn-deconnexion"
        onClick={handleLogout}
      >
        Hello
      </button>
    </div>
  )
}
