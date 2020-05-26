import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'; 
import './App.css';
import NavBar from './navbar';
import Content from './Content';
import Footer from './footer';

function App() {
  return (
    
    <div className="App">
      <div className="container-content">
      < NavBar /> 
      <div className="center">
      <Router>
      < Content />
      <Route path="/https://www.youtube.com/watch?v=AVkphsjh8HI" />
      </Router>
      
      </div>
      <div className="footer">
      < Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
