import React from 'react';
import BlogItem from './BlogItem.jsx';
import "./assets/Bloglist.css";
import "../../assets/common.css";

export default function BlogList({ blogs }) {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  )
}
