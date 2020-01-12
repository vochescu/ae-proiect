import React, { Component } from 'react';
import Product from './Product'
import ProductStore from '../stores/ProductStore'
import VizualizareProdus from './VizualizareProdus'
import {EventEmitter} from 'fbemitter'

const ee = new EventEmitter()
const store = new ProductStore(ee)

class ProductList extends Component {
  constructor(props){
    super(props)
    this.state = {
      products : [],
      expandFor: -1,
      selected: null
      
    }
    this.selectProduct = (id) => {
      store.getOne(id)
      ee.addListener('SINGLE_PRODUCT_LOAD', () => {
        console.warn(store.selected)

        this.setState({
          expandFor : store.selected.id,
          selected : store.selected
        })
      })
    }
    this.cancelSelection = () => {
      this.setState({
        expandFor : -1
      })
    }
  }
  componentDidMount(){
    store.getAll()
    ee.addListener('PRODUCT_LOAD', ()=> {
      this.setState({
        products : store.content
      })
    })
  }
  render() {
    if (this.state.expandFor === -1){
      return (
        <div >
        <h2 className="title">Toate produsele</h2>
        <ul className="grid" >
          {
            this.state.products.map((c) => <Product product={c} key={c.id} onSelect={this.selectProduct}/> )
          }
        </ul>
        <div>
        </div>
      </div>
      )
    }
    else{
      return (
        <div>
         <ul className="list-group">
         
          <VizualizareProdus product = {this.state.selected} onCancel={this.cancelSelection} productId={this.state.selected.id}/> 
          </ul>
        </div>
      )
    }
  }
}

export default ProductList
