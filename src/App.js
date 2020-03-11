import React, {useState} from 'react';
import './App.css';
import './media.css'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function App() {

  return <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">Jordan Kussmann</Link>
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <a href="https://drive.google.com/file/d/1_fPK_EsdY_h-GyvduUqIuLuo5tdwtIzy/view?usp=sharing" target="_blank">Résumé</a>
        </div>
      </header>

      <Route path="/" exact component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/projects" component={Projects} />

    <footer>
      <div className="footer-category-grid">
        <h3 className="footer-title">Contact</h3>
        <div className="footer-content-grid">
          <MdEmail style={{fontSize: '24px'}}/>
          <h2>jskussmann@gmail.com</h2>
          <FaLinkedin style={{fontSize: '24px'}}/>
          <h2>https://www.linkedin.com/in/jordankussmann/</h2>
        </div>
      </div>
      <div className="footer-category-flex">
        <h3 className="footer-title">Navigate</h3>
        <div className="footer-content-flex">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <a href="https://drive.google.com/file/d/1_fPK_EsdY_h-GyvduUqIuLuo5tdwtIzy/view?usp=sharing" target="_blank">Resume</a>
        </div>
      </div>
    </footer>

    </div>
  </BrowserRouter>
}

export default App;
