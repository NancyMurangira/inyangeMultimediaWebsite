import React from 'react';
import './index.css';
import medialogo from './medialogo.png';

function Footer() {
   return (
       <footer className="footer">
           <div className="footer-content">
               <div className="footer-logo">
                   <img src={medialogo} alt="logo" />
               </div>
               <div className="footer-links">
                   <div className="footer-column">
                       <h3>Partnership</h3>
                       <ul>
                           <li>Websites</li>
                           <li>Branding</li>
                       </ul>
                   </div>
                   <div className="footer-column">
                       <h3>About</h3>
                       <ul>
                           <li>Our Projects</li>
                           <li>Careers</li>
                       </ul>
                   </div>
                   <div className="footer-column">
                       <h3>Support</h3>
                       <ul>
                           <li>Support Request</li>
                           <li>Contact</li>
                       </ul>
                   </div>
                   <div className="footer-column"></div>
                   <div className="footer-column">
                       <h3>Connect</h3>
                       <div className="social-icons">
                           {/* Add your social media icons here */}
                           <a href="#" className="social-icon">FB</a>
                           <a href="#" className="social-icon">TW</a>
                           <a href="#" className="social-icon">IG</a>
                       </div>
                   </div>
               </div>
           </div>
       </footer>
   );
}

export default Footer;