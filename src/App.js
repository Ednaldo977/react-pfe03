import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import React from "react";
import { AuthContext } from "./providers/auth";


import './App.css';

function App() {
  const {user, setUser} = React.useContext(AuthContext);
  console.log(user);
  






  return (
    <div className="App">
      <div class="menuNAV">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark" >
  <a class="navbar-brand titulo" >EDNALDO JÚNIOR</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item active">
              </li>
      <li class="nav-item active">
        <a class="nav-link" ><Link to="/">INÍCIO</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><Link to="/about">SOBRE</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><Link to="contact">CONTATO</Link></a>
      </li>
    </ul>
  </div>
</nav>
    </div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    
    
    </div>
  );
}

export default App;
