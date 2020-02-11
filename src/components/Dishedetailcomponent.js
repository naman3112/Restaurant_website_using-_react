import React,{Component} from 'react';
import{ Card, CardImg,Row, CardText, CardBody, Modal, ModalHeader, ModalBody, ModalFooter,
    CardTitle,Breadcrumb,Button,Label,BreadcrumbItem,Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import {Control,LocalForm,Errors} from 'react-redux-form';

const required=(val)=> val && val.length;
const maxLength =(len)=>(val)=>!(val) || (val.length<=len);
const minLength=(len)=>(val)=>val&&(val.length>=len);
  class CommentForm extends Component {
    
    constructor(props){
        super(props)
    this.state={
        modal:false
    }
    this.toggle=this.toggle.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values){
       console.log("Current state is "+JSON.stringify(values));
      alert("Current state is :"+JSON.stringify(values));
    this.props.addComment(this.props.dishId, values.rating, values.yourname, values.message);

  }
  
  
  toggle(){
      this.setState(
          {
            modal:!this.state.modal
          }
      )
  }
  
    render(){
    return (
        <div>
          <Button outline color="secondary" size="medium"  onClick={this.toggle}><i className="fa fa-pencil fa-md "></i> Submit Comment</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
            <ModalBody>
            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>

            <Row className="form-group">
            <Label className="ml-3">Rating</Label>                             
                                <Col md={{size: 12}}>
                                    <Control.select  model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Control.select>
                                </Col>
              
                            </Row>





            <Row className="form-group">
                               
              <Label htmlFor="yourname" className="ml-1" md={3}>Your Name</Label>
                         <Col md={12}>
                              <Control.text model=".yourname" type="text" id="yourname" name="yourname"
                                placeholder="Your Name"
                                className="form-control"
                                  validators={
                                      {
                                          required,minLength:minLength(3),maxLength:maxLength(15)
                                       }
                                  }
                            
                                       />
                                      
                                      <Errors className="text-danger"
                                      model=".yourname"
                                      show="touched"
                                      messages={{
                                          required:'Required',minLength:'Must be greater than 2 characters',
                                        maxLength:'Must be 15 characters or less'
                                      }

                                      }
                                      />             
                           </Col>
                          
            
             </Row>
                      
             <Row className="form-group">
                 <Label htmlFor="message" md={5}>Comment</Label>
                     <Col md={12} cl>
                       <Control.textarea model=".message" id="message" name="message"
                          rows="6"
                             className="form-control" />
                      </Col>
            </Row>                               
            <Row   >
            <Col  >
            <Button  color="primary" type="submit">Submit</Button>{' '}
            
            </Col>
             
            </Row>                         

              </LocalForm>

  
              </ModalBody>
          
              
          </Modal>
        </div>
      );

 
}
}  
        function RenderComments({comments,addComment,dishId}){
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
                                <CommentForm dishId={dishId} addComment={addComment} />
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
                    
                    <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                        
                  </Breadcrumb>
                
                    <div className="col-12">
                        
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                 </div> 
                      <div className="row">
                          <div  className="col-12 col-md-5 m-1">
                                <RenderDish dish={props.dish}/>
                       
                         </div>
                         <div className="col-12 col-md-5 m-1">   
                        
                             <RenderComments comments={props.comments}
                             
                             addComment={props.addComment}
                             dishId={props.dish.id}
                             />
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