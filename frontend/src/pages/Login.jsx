import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/common.css";
import "../assets/Login.css";
import ButtonBack from "../components/ButtonBack";
import API from "../services/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      API.post(
        `/login/users`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
        .then((res) => {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("userId", res.data.id);
          if (res.data.role === "ADMIN") {
            localStorage.setItem("isAdmin", true);
            navigate("/mon-compte/admin-dashboard");
          } else {
            navigate("/mon-compte/utilisateur");
          }
        })
        .catch((err) => {
          if (err) {
            setLoginError(true);
            setTimeout(() => {
              setLoginError(false);
            }, 5000);
          }
        });
    };
  return (
    <div>
        <h2>
        Connexion
        </h2>
        <ButtonBack />
        <div className="div-connexion-facebook-google">
            <div className="btn-connexion-facebook">
                <button type="submit">Continuer avec Facebook</button>
            </div>
            <div className="btn-connexion-google">
                <button type="submit">Continuer avec Google</button>
            </div>
        </div>
        <div className="div-connexion-email">
            <form onSubmit={handleLogin}>
            <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
           <p>
                <NavLink to="/inscription">
            Mot de passe oublié ?
          </NavLink>
            </p>
          <div>
            {loginError && (
              <span>
                L'email ou le mot de passe ne correspondent pas
              </span>
            )}
          </div>
          <div className="btn-seconnecter">
            <button type="submit">SE CONNECTER</button>
          </div>
            </form>
           
            <p> Vous n'avez pas encore de compte ?
          <NavLink to="/inscription">
            Première inscription !
          </NavLink>
        </p>
        </div>
    </div>
  )
}
