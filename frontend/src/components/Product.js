import React, {Component} from 'react'

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
         <div className="gridDiv">
           <li >
           <p id="bottomHeader">
          <h4>{this.props.product.name}</h4>   

          <input type="button" className="btn btn-info" value="Vizualizeaza" onClick={() => this.props.onSelect(this.props.product.id)}/>
          </p>
          <img className="img" src={this.props.product.image}/>
          </li>
          </div>
          
    )
    }
}

export default Product
