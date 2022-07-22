import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Banner from "../components/Banner";
import UserCard from "../components/UserCard";
import { FcSearch } from "react-icons/fc";
import { MainContext } from "../contexts/MainContext";
import API from "../services/api";
import "../assets/common.css";
import "../assets/Inscrits.css";

export default function Inscrits() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();
  const {
    isUserDeleted,
    setIsUserDeleted,
  } = useContext(MainContext);

  const getUsers = () => {
    API.get(`/users`)
      .then((res) => {
        setUsers(res.data);
        setIsUserDeleted(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn") && !localStorage.getItem("isAdmin")) {
      navigate("/mon-compte");
    }
    if (!localStorage.getItem("loggedIn") && !localStorage.getItem("isAdmin")) {
      navigate("/");
    }
    getUsers();
  }, [isUserDeleted]);
  return (
    <div className="admindashboard-container">
    <UserNavbar />
    <Banner />
    <h2>Liste des inscrits sur le site</h2>
    <div className="usersearch">
      <input
        type="text"
        placeholder="Rechercher un utilisateur"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
      /><FcSearch className="iconsearch" size="27" color="black" />
    </div>
    <ul>
      {users &&
        users
          .filter(
            (user) =>
              user.firstname
                .toLowerCase()
                .includes(searchUser.toLowerCase()) ||
              user.lastname
                .toLowerCase()
                .includes(searchUser.toLowerCase()) ||
              user.phoneNumber.includes(searchUser) ||
              user.email.toLowerCase().includes(searchUser.toLowerCase()) ||
              user.city
                .toLowerCase()
                .includes(searchUser.toLowerCase()) ||
              user.question
                .toLowerCase()
                .includes(searchUser.toLowerCase())
              
          )
          .map((user) => {
            return (
              <li key={user.id}>
                <UserCard users={users} setUsers={setUsers} user={user} />
              </li>
            );
          })
          .reverse()}
    </ul>
  </div>
  )
}
