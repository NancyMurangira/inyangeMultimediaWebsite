
import React from 'react';
import './App.css';
import Podcast from './Podcast';
import VideoSection from './Videos';
import Landingpage from './Landingpage';
import Blog from './Blog';
import Footer from './Footer';
import Portfolio from './Resume';



function App() {
  return (
    <div className="App">
      <Landingpage/>
      <VideoSection />
      <Blog/>
      <Podcast />
      <Portfolio/>
      <Footer/>
    </div>
  );
}
export default App;

