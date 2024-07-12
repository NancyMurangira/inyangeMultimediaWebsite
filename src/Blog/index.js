import React from 'react';
import './index.css';
import bornacrime from './bornacrime.jpg';
const Blog = () => {
  return (
    <div className='blog'>
      <h2>Blog</h2>
      <div className='blog-section'>
        <div className='blog-post'>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
        <div className='blog-image'>
          <img src={bornacrime} alt="Born a Crime book cover" className='book-img'/>
        </div>
      </div>
    </div>
  )
}
export default Blog;