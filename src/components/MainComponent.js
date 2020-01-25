import React, { Component } from 'react';
import Footer from './FooterComponent.js';
import Menu from './Menucomponent';
import Contact from './ContactComponent.js';
import Dishdetail from './Dishedetailcomponent.js'
import Header from './HeaderComponent.js';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';



import Home from "./HomeComponent.js";
import {Switch, Route, Redirect} from 'react-router-dom';

class  Main extends Component {
  constructor(props){
    super(props);

  this.state={
    dishes: DISHES,
   comments:COMMENTS,
   promotions:PROMOTIONS,
   leaders:LEADERS
  
  };
}



render(){
const HomePage=()=> {
  return(
    <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} 
    promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
    />
  
    );
}

  return (
   
    <div>
      <Header/>
      
      <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>           
          <Route exact path="/contactus" component={Contact}/>
           <Redirect to="/home"/>
      </Switch>
    
        
    <Footer/>
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