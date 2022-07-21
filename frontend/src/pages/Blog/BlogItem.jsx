import React from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import "./assets/Blogitem.css";
import "../../assets/common.css";

export default function BlogItem({
    blog: {
      description,
      title,
      createdAt,
      authorName,
      authorAvatar,
      cover,
      category,
      id,
    }}
    ) {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
        <span> &#8592;</span> <span> lire l'article </span> ➝
        </Link>
      </footer>
    </div>
  )
}
