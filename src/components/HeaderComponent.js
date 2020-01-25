import React,{Component} from 'react';
import { NavbarBrand, Navbar,Jumbotron} from 'reactstrap';


class Header extends Component{
    render(){
        return( 
           <React.Fragment> 
            <Navbar dark>
            <div className="container">
              <NavbarBrand href="/">
                <strong>Ristorante Con Fusion</strong>
                </NavbarBrand>
            </div>
          </Navbar>
          
          <Jumbotron>
                <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusioin</h1>
                                <p>We take inspiration from the World's best cuisines and createa unique fusion experience.our lipsmacking creations will tickle your culinary sense!</p>
                            </div>
                        </div>
                </div>

          </Jumbotron>
       
            </React.Fragment>
        )
    }
}
export default Header;