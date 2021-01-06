import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Section from './components/Section';
import Skills from './components/Skills';
import { homeObj1, homeObj2, homeObj3, homeObj4, homeObj5, homeObj6} from './components/pages/Data.js';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    
      <Navbar/>
      <div id='home'><Section {...homeObj1}/></div>
      <div id='skills'><Skills /></div>
      <div id='experience'><Section {...homeObj2}/></div>
      <div id='projects'><Section {...homeObj3}/></div>
      <Section {...homeObj4}/>
      <Section {...homeObj5}/>
      <Section {...homeObj6}/>
      <div id='contact'><Footer /></div>
    
    </Router>
  );
}

export default App;
