import React, { Component } from 'react';
import{ Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

import { NavLink , NavbarBrand, Navbar} from 'reactstrap';
/*import Dishdetail from './DishdetailComponent.js';
*/
//import Dishg from "./components/Dk";
class Menu extends Component {

    constructor(props) {
        super(props);

       
    }

  

    render() {
     
    
            const menu = this.props.dishes.map((dish) => {
                return (
                  <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                      onClick={()=>this.props.onClick(dish.id)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                          <CardTitle><strong>{dish.name}</strong></CardTitle>
                      </CardImgOverlay>
                    
                
                    </Card>
                  </div>
                );
            });
        
            return (
                <div className="container">
                    <div className="row">
                        
                        {menu}
                    </div>
    
    
    
                   
                     
                     </div>
            );
        }
        
        
        
        
        }
    
      

      

export default Menu

 