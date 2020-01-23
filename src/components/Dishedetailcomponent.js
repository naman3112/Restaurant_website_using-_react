import React, { Component } from 'react';
import{ Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    import { DISHES } from '../shared/dishes';
   
class Dishdetail extends Component{
    
        constructor(props) {
            super(props);
        

        }
   


        renderComments(dish){
            if(dish!=null){
             var commentsofauthor = dish.comments.map(function(comp)
                        {
                           var d =Date.parse(comp.date);
                         var ipl=new Date(d);
                      var k=   ipl.toDateString();
                       
                            return(
                                   <div>
                                            
                            
                                        
                                    <p>{comp.comment} </p> 
                                   <p>-- {comp.author+"  , "}  {k}  </p>

                                   </div>
                                      
                                                      
                            )
                        }

                
                )

                        return(
                            <div>
                               <h4>Comments</h4> 
                                {commentsofauthor}
                            </div>
                        )
                        

                    }
            
            
            
             else{
                 return (
                        <div>

                        </div>
                 )   
                
        }
    }

        
        renderDish(dish) {
            if (dish != null)
                return(
                   
               
                   <Card>      
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle><strong>{dish.name}</strong></CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    
                     
                   
                );
            else
                return(
                    <div></div>
                );
        }
    
    render(){
    
      
    
        return (
            <div className="container">
               



                <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish1)}
                   
                     </div>
                     <div className="col-12 col-md-5 m-1">   
                    
                 {this.renderComments(this.props.dish1)}
                    </div>
                
                 </div>
                     
               
                 
                 </div>
        );
    }
    
    
    
    
    }







export default Dishdetail