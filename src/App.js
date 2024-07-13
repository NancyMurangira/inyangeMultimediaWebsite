import React from 'react';
import './App.css';
import LandingPage from './Landingpage';
import VideoSection from './Videos';
import Blog from './Blog';
import Podcast from './Podcast';
import Portfolio from './Resume';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <LandingPage />
      <VideoSection />
      <Blog />
      <Podcast />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;