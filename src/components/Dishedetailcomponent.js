import React from 'react';
import{ Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

   
   
        
    

        function RenderComments({dish}){
            if(dish!=null){
             var commentsofauthor = dish.comments.map(function(comp)
                        {
                           var d =Date.parse(comp.date);
                         var ipl=new Date(d);
                      var k=   ipl.toDateString();
                       
                            return(
                                   <div key={dish.id}>
                                            
                            
                                        
                                    <p>{comp.comment} </p> 
                                   <p>-- {comp.author+"  , "}  {k}  </p>

                                   </div>
                                      
                                                      
                            )
                        } 
                        )

                        return(
                            <div key={dish.id}>
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

        
       function RenderDish({dish}) {
            if (dish != null)
                return(
                   
               
                   <Card key={dish.id}>      
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle><strong>{dish.name}</strong></CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    
                     
                   
                );
            else
                return(
                    <div ></div>
                );
        }
    
    const Dishdetail=(props)=>{
    
        return (
            <div  className="container">
               
                  <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish1}/>
                   
                     </div>
                     <div className="col-12 col-md-5 m-1">   
                    
                 <RenderComments dish={props.dish1}/>
                    </div>
                
                 </div>
                     
               
                 
                 </div>
        );
    }
    
    
    
    
 







export default Dishdetail