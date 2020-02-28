import React from 'react';
import './App.css';
import './media.css'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  
  return <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <span className="home-logo">Jordan Kussmann</span>
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <a href="https://drive.google.com/file/d/1_fPK_EsdY_h-GyvduUqIuLuo5tdwtIzy/view?usp=sharing" target="_blank">Resume</a>
        </div>
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/projects" component={Projects} />

    </div>
  </BrowserRouter>
}

export default App;
