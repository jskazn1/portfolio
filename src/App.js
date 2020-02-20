import React from 'react';
import './App.css';
import './media.css'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />

    </div>
  </BrowserRouter>
}

export default App;
