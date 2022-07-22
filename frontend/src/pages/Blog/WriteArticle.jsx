import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Moment from "moment";
import API from "../../services/api"; 
import { toast  } from 'react-toastify';
import "../../assets/common.css";
import "./assets/WriteArticle.css";
import UserNavbar from "../../components/UserNavbar";
import Banner from "../../components/Banner";

export default function WriteArticle() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState(""); 
    const [description, setDescription] = useState("");
    const [authorName, setAuthorName] = useState("");
    const createdAt = Moment().format("DD-MM-YYYY");
    const navigate = useNavigate();
    
  const handleRegisterProject = (e) => {
    e.preventDefault();
    API
      .post(`/add/articles`, {
        title,
        category,
        subCategory,
        description,
        authorName,
        createdAt,
      })
      .then(() => {
        setTimeout(() => {
            navigate("/blog");
            toast.success('Et un article de plus!');
        }, 500);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
    <UserNavbar />
    <Banner />
    <div className="writing-container">
      <div className="div-form-writing">
        <h2>
          Today is the day!! Let's Preach!!
        </h2>
        <form
          className="form-writing"
          onSubmit={handleRegisterProject}
        >
          <input
            type="text"
            placeholder="Titre"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Catégorie"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Sous-catégorie"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Contenu"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Auteur"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <div className="btn-writing">
            <button type="submit">VALIDER</button>
          </div>
        </form>
        <NavLink to="/blog" className="link-articles">
          {" "}
          Tous les articles ➝
        </NavLink>
      </div>
    </div>
    </>
  );
};
