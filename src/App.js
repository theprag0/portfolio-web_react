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
      <Home 
        firstName={mainProps.firstName} 
        lastName={mainProps.lastName} 
        roles={mainProps.roles}
      />
      <About 
        mainImg={mainProps.mainImg}
        firstName={mainProps.firstName} 
        lastName={mainProps.lastName}
        email={mainProps.email}
        phone={mainProps.phone}
        dob={mainProps.dob}
        cv={mainProps.cv}
      />
      <Resume exp={mainProps.experience} awards={mainProps.awards}/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
