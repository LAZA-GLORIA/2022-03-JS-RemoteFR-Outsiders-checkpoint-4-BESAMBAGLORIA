import React, { useState } from 'react';
import PageInconnue from '../PageInconnue';
import BlogList from './BlogList';
import SearchBarBlog from './SearchBarBlog';
import { blogList } from '../../data/bloglist';

export default function BlogBanner() {
    const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };
  return (
    <div>
    <SearchBarBlog
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
    />

        {!blogs.length ? <PageInconnue /> : <BlogList blogs={blogs} />}
    </div>
  )
}
