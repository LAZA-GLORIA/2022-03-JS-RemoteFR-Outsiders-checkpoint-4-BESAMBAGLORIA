import React, { useState, useContext } from 'react';
import { toast  } from 'react-toastify';
import { useNavigate } from "react-router-dom";
//import axios from "axios";
import API from "../services/api";
import Moment from "moment";
import { MainContext } from "../contexts/MainContext";
import ButtonBack from '../components/ButtonBack';
import Footer from "./Footer";
import "../assets/common.css";
import "../assets/Signup.css";

export default function Signup() {
    const { setIsFirstConnection } = useContext(MainContext);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [question, setQuestion] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const signupDate = Moment().format("DD-MM-YYYY");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          setPasswordError(true);
          setTimeout(() => {
            setPasswordError(false);
          }, 5000);
        } else {
         //   axios
        //.post(`${import.meta.env.VITE_BACKEND_URL}/auth/users`, {
          API.post(`/auth/users`, {
            firstname,
            lastname,
            phoneNumber,
            email,
            city,
            question,
            password,
            signupDate
          })
            .then((res) => {
              setIsFirstConnection(true);
              localStorage.setItem("userId", res.data.id);
              localStorage.setItem("loggedIn", true);
              navigate("/mon-compte");
              toast.success("Inscription validée !");
            })
            .catch((err) => {
              if (err) {
                setError(true);
                setTimeout(() => {
                  setError(false);
                }, 5000);
              }
            });
        }
      };
    
  return (
    <>
    <div className='signup-container'>
        <ButtonBack />
        <h2>Inscription</h2>
        <div className='div-signup-input'>
            <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Prénom"
              value={firstname}
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nom"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          <input
            type="text"
            placeholder="Numéro de téléphone"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="city"
            placeholder="Ville"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
           <select
            name="question"
            id="question"
            onChange={(e) => setQuestion(e.target.value)}
          >
            <option value="" required="">
              Comment avez-vous connu le site
            </option>
            <option value="Facebook">Sur facebook</option>
            <option value="Instagram">Sur Instagram</option>
            <option value="Bouche à Oreilles">Un proche vous a parlé de nous</option>
            <option value="Google">Lors d'une recherche Google</option>
          </select>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmer mot de passe"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div>
            {error && <span className="error">Une erreur est survenue</span>}
            {passwordError && (
              <span className="error">
                Les mots de passe ne correspondent pas
              </span>
            )}
          </div>
          <div className='div-btn-signupsubmit'>
            <button type="submit">S'INSCRIRE</button>
          </div>
            </form>
      </div>
    </div>
    <Footer />
    </>
  )
}
