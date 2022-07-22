import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Chip from './Chip';
import BlogBanner from './BlogBanner';
import { blogList } from '../../data/bloglist';
import ButtonBack from '../../components/ButtonBack';
import Banner from '../../components/Banner';
import "./assets/Blog.css";
import "../../assets/common.css";

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <>
    <Banner />
    <ButtonBack />
    <BlogBanner />
    <div>
      {blog && (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      )}
    </div>
    </>
  )
}
