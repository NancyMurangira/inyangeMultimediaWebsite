import React from 'react';
import './index.css';

const Portfolio = () => {
  return (
    <div className='portfolio-container'>
      <h2 className='portfolio-heading'>Resume Portfolio</h2>
      <div className='portfolio-grid'>
        <div className='profile'>
          <img src="/image/eshe.png" alt='Eshe Aziz' className='portrait'/>
          <p>Eshe Aziz</p>
          <a href='https://myresume-eight-lac.vercel.app/' className='view-button'>View</a>
        </div>
        <div className='profile'>
          <img src='/image/nyambura.png' alt='Faith Nyambura' className='portrait'/>
          <p>Faith Nyambura</p>
          <a href='https://folio-ochre.vercel.app/' className='view-button'>View</a>
        </div>
        <div className='profile'>
          <img src='/image/shimwe.png' alt='Nancy Shimwe' className='portrait'/>
          <p>Nancy Shimwe</p>
          <a href='https://resume-seven-umber.vercel.app' className='view-button'>View</a>
        </div>
        <div className='profile'>
          <img src='/image/funani.png' alt='Rehema Funani' className='portrait'/>
          <p>Rehema Funani</p>
          <a href='https://portfolio-sand-xi-33.vercel.app/' className='view-button'>View</a>
        </div>
        <div className='profile'>
          <img src='/image/Oyelaaa.png' alt='Eyvone Annet Oyella' className='portrait'/>
          <p>Eyvone Annet Oyella</p>
          <a href='public/cv/_Oyella--CV (2).pdf' className='view-button'>View</a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;