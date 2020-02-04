import React,{useState,Component} from 'react';
import{ Card, CardImg, CardText, CardBody, Modal, ModalHeader, ModalBody, ModalFooter,
    CardTitle,Breadcrumb,Button,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import {Control,LocalForm,Errors} from 'react-redux-form';

/*
class CommentForm extends Component{
    constructor(){
        
    super();
this.handleClose=this.handleClose.bind(this);
this.handleShow=this.handleShow.bind(this);
//const [show, setShow] = useState(false);

    }
     

    handleClose = () => this.setShow(false);
     handleShow = () => this.setShow(true);

    render(){
        return(
            <LocalForm>
            <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button>

      <Modal show={this.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </LocalForm>
        )
    }
    
}

   */
  class CommentForm extends Component {
    
    constructor(props){
        super(props)
    this.state={
        modal:false
    }
    this.toggle=this.toggle.bind(this);
    }
  
  //  const [modal, setModal] = useState(false);
  
    //const toggle = () => setModal(!modal);
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
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );

 
}
}  
  



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
                                <CommentForm/>
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