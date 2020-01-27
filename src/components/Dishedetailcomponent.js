import React from 'react';
import{ Card, CardImg, CardText, CardBody,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

        function RenderComments({comments}){
            if(comments!=null){
             var commentsofauthor = comments.map(function(comp)
                        {
                           var d =Date.parse(comp.date);
                         var ipl=new Date(d);
                      var k=   ipl.toDateString();
                       
                            return(
                                   <div key={comp.id}>
                                            
                            
                                        
                                    <p>{comp.comment} </p> 
                                   <p>-- {comp.author+"  , "}  {k}  </p>

                                   </div>
                                      
                                                      
                            )
                        } 
                        )

                        return(
                            <div key={comments.id}>
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
                    
                     
                   
                )
            else
                return(
                    <div ></div>
                );
        }
    
    const Dishdetail=(props)=>{
        if(props.dish!=null){
            return (
                <div  className="container">
                 
                    <div className="row">
                  <Breadcrumb>
                    
                    <BreadcrumbItem><Link to ='/menu'>Menu</Link>  </BreadcrumbItem>
                    
                    <BreadcrumbItem active>{props.dish.name} </BreadcrumbItem>
    
                  </Breadcrumb>
                    <div className="col=12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                 </div> 
                      <div className="row">
                          <div  className="col-12 col-md-5 m-1">
                                <RenderDish dish={props.dish}/>
                       
                         </div>
                         <div className="col-12 col-md-5 m-1">   
                        
                             <RenderComments comments={props.comments}/>
                        </div>
                    
                     </div>
                         
                   
                     
                     </div>
           
           
           )

               
    
        }
        else{
            return<div></div>
        }
 
   
    }
    
    
    
    
 







export default Dishdetail