import React from 'react';
import './App.css';
import './media.css'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'

function App() {
  return <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Resume">Resume</Link>
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Resume" component={Resume} />

    </div>
  </BrowserRouter>
}

export default App;
