import React from 'react';
import './App.css';
import logo from './image/nig logo.png';
import nav from 'react-bootstrap/nav'

const NavBar = () =>(

  <div className="mainnav">
 <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#"><img src={logo} alt="brandlogo" className="logo" />NTRIP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="mr-auto"></div>
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="">Tour <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="">Our history</a>
      <a class="nav-item nav-link" href="">Contacts</a>
      <a class="nav-item nav-link" href="">Q&A</a>
    </div>
  </div>
</nav>
  </div>




);

export default NavBar;