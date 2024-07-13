import React from 'react';
import './index.css';
import podcast from './podcast.jpg';

const Podcast = () => {
 return (
   <div className='podcast-section'>
     <h2>Podcast</h2>
     <div className='podcast-content'>
       <div className='podcast-image'>
         <img src={podcast} alt='Podcast' className='img'/>
       </div>
       <div className='podcast-text'>
         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
         <button className='play-button'>Play</button>
       </div>
     </div>
   </div>
 )
}

export default Podcast;