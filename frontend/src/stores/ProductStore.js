import axios from 'axios'
const SERVER = 'http://34.245.121.132:8080'

class ProductStore{
    constructor(ee){
        this.ee=ee
        this.content=[]
        this.selected = null
    }
    getAll(){
       axios(SERVER + '/products/')
        .then((response)=>{
            this.content = response.data
            this.ee.emit('PRODUCT_LOAD')
        })
        .catch((error)=> console.warn(error))
    }
    getAllBedroom(){
       axios(SERVER + '/products/bedroom')
        .then((response)=>{
            this.content = response.data
            this.ee.emit('BEDROOM_LOAD')
        })
        .catch((error)=> console.warn(error))
    }
    
      getAllLiving(){
       axios(SERVER + '/products/livingroom')
        .then((response)=>{
            this.content = response.data
            this.ee.emit('LIVINGROOM_LOAD')
        })
        .catch((error)=> console.warn(error))
    }
    
    
      getAllLamps(){
       axios(SERVER + '/products/lamps')
        .then((response)=>{
            this.content = response.data
            this.ee.emit('LAMPS_LOAD')
        })
        .catch((error)=> console.warn(error))
    }
    addOne(product){
         axios.post(SERVER + '/products/',product)
        .then(()=> this.getAll())
        .catch((error)=> console.warn(error))
    }
    deleteOne(id){
    axios.delete(SERVER + '/products/' + id)
      .then(() => this.getAll())
      .catch((error) => console.warn(error))
    }
    saveOne(id, product){
    axios.put(SERVER + '/products/' + id, product)
      .then(() => this.getAll())
      .catch((error) => console.warn(error))
    }
    getOne(id){
    axios(SERVER + '/products/' + id)
      .then((response) => {
        this.selected = response.data
        this.ee.emit('SINGLE_PRODUCT_LOAD')
      })
      .catch((error) => console.warn(error))
  }
}

export default ProductStore