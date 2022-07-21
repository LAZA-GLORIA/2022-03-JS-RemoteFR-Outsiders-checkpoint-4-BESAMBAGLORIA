import React from 'react';
import "./assets/Searchbarblog.css";

export default function SearchBarBlog({ formSubmit, value, handleSearchKey, clearSearch }) {
  return (
    <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Recherche par catégories'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Chercher</button>
    </form>
  </div>
  )
}
