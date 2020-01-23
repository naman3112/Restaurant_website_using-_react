import React, { Component } from 'react';

import { NavbarBrand, Navbar} from 'reactstrap';
import Menu from './Menucomponent';
import Dishdetail from './Dishedetailcomponent.js'


//import './App.css';
import { DISHES } from '../shared/dishes';

class  Main extends Component {
  constructor(props){
    super(props);

  this.state={
    dishes: DISHES,
    selectedDish: null
  };
}

onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
}


render(){

  return (
    
      
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            <strong>Ristorante Con Fusion</strong>
            </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
       onClick={(dishId) => this.onDishSelect(dishId)}
       />
        <Dishdetail  dish1={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}  />

    </div>
);
}

}
export default Main;
/*
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menucomponent.js';
import Dishdetail from './Dishdetailcomponent.js';
import { DISHES } from '../shared/dishes.js';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish1={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
*/