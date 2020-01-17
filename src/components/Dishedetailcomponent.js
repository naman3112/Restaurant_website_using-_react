import React, { Component } from 'react';
import{ Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class Dishdetail extends Component{
    
        constructor(props) {
            super(props);
    
            this.state = {
                selectedDish: null
            }
        }
    onDishSelect(dish) {
            this.setState({ selectedDish: dish});
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
    
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
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



                <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(this.state.selectedDish)}
                   
                     </div>
                     <div className="col-12 col-md-5 m-1">   
                    
                 {this.renderComments(this.state.selectedDish)}
                    </div>
                
                 </div>
                     
               
                 
                 </div>
        );
    }
    
    
    
    
    }







export default Dishdetail