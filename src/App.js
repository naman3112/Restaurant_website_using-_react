import React, { Component } from 'react';
import logo from './logo.svg';
import { NavLink , NavbarBrand, Navbar} from 'reactstrap';
import Menu from './components/Menucomponent';


import './App.css';
import { DISHES } from './shared/dishes';
import { render } from 'react-dom';

class  App extends Component {
  constructor(props){
    super(props);

  this.state={
    dishes: DISHES
  };
}
render(){

  return (
    
      
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            hey Ristorante Con Fusion
            </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />


    </div>
);
}

}
  
  
  
  

export default App;
