import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';
import { FcSearch } from "react-icons/fc";
import ButtonBack from '../../components/ButtonBack';
import Banner from '../../components/Banner';
import API from "../../services/api";
import "./assets/Blog.css";
import "../../assets/common.css";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState("");

  const getAllArticles = () => {
    API.get(`/articles`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <>
    <Banner />
    <ButtonBack />
    <div className="searchBar-wrap">
      <input
        type="text"
        placeholder="Recherche par catégories"
        value={searchArticles}
        onChange={(e) => setSearchArticles(e.target.value)}
      />
      <FcSearch size="27" color="black" />
    </div>
      {articles && 
      articles
      .filter(
        (article) =>
        article.title
            .toLowerCase()
            .includes(searchArticles.toLowerCase()) ||
            article.category
            .toLowerCase()
            .includes(searchArticles.toLowerCase()) ||
            article.subCategory
            .toLowerCase()
            .includes(searchArticles.toLowerCase())   
      )
      .map((article) => {
        return (
          <li key={article.id}>
                <BlogItem articles={articles} setArticles={setArticles} article={article} />
              </li>
              );
        }) 
        .reverse()} 
    
  </>
  );
};


