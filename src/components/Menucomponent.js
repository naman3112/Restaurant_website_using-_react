import React, { Component } from 'react';


import { NavLink , NavbarBrand, Navbar} from 'reactstrap';
/*import Dishdetail from './DishdetailComponent.js';
*/
//import Dishg from "./components/Dk";
import Dishdetail from './Dishedetailcomponent.js'
class Menu extends Component {

    constructor(props) {
        super(props);

       
    }

  

    render() {
      

        return (
              /*  <Dishdetail dishes={this.props.dishes}  />*/
             <div>
                
                 <Dishdetail  dishes={this.props.dishes}/>

             </div> 
                         );
    }
}
export default Menu

 