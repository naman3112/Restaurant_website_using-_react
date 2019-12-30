import React from 'react';
import logo from './logo.svg';
import { NavLink , NavbarBrand, Navbar} from 'reactstrap';


import './App.css';

function App() {
  return (
    
      
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              hey Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
  );
}

export default App;
