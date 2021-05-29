import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import {defaultProps} from './constants';
import './App.css';

function App({mainProps = defaultProps}) {
  return (
    <>
      <Navbar />
      <Home {...mainProps}/>
      <About {...mainProps}/>
      <Resume exp={mainProps.experience} awards={mainProps.awards}/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
