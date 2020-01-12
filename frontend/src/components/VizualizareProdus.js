import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';

class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      pName : '',
      pDescription: '',
      pPrice: 0,
      pStock: 0,
      pImage: ""
    }
     this.handleChange = (event) => {
      this.setState({
        [event.target.product] :event.target.value
      })
    }
  }
  
  componentDidMount(){
    this.setState({
      pName : this.props.product.name,
      pDescription : this.props.product.description,
      pPrice : this.props.product.price,
      pStock : this.props.product.stock,
      pImage : this.props.product.image
    
    })
  }
  
  render() {
       return (
         
    <Container fluid>
      <Row>
        <Col xs={6}><img height="500" src={this.props.product.image}/> </Col>
        
        <Col xs={6}><Row> 
         <Col><h1>{this.props.product.name}</h1> </Col>
        <Col> <p><i>{this.props.product.description}</i></p></Col>
           <Col> <p> <b>Pret : {this.props.product.price} RON</b></p></Col>

        </Row> </Col>
      </Row>
    </Container>


    )
    }
}

export default Product
