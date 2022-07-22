import React from 'react';
import { Link } from 'react-router-dom';
import "./assets/Blogitem.css";
import "../../assets/common.css";

export default function BlogItem({ article }) {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={article.cover} alt='cover' />
     <p className='blogItem-category'> {article.category}</p>
      <p className='blogItem-subcategory'> {article.subCategory}</p>
      <h3>{article.title}</h3>
      <p className='blogItem-desc'>{article.description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={article.authorAvatar} alt='avatar' />
          <div>
            <h6>{article.authorName}</h6>
            <p>{article.createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${article.id}`}>
        <span> lire l'article </span> ➝
        </Link>
      </footer>
    </div>
  )
}
