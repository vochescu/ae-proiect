const express = require('express'),
      bodyParser = require('body-parser'),
      Sequelize = require('sequelize')

const sequelize = new Sequelize('catalog','root','root',{
  dialect : 'mysql',
  define : {
    timestamps : false
  }
})

const Product = sequelize.define('product', {
  name : {
      type: Sequelize.STRING,
      allowNull: false, // null satisface orice validator
      validate: {
          len: [3,50] //  lungimea minima-max a name 
      }
  },
   description : {
    type : Sequelize.TEXT,
    allowNull : true
  },
    category : {
    type : Sequelize.TEXT,
    allowNull : false
  },
    image: {
    type : Sequelize.TEXT,
    allowNull : true
  },
 price : {
    type : Sequelize.FLOAT,
    validate : {
      isFloat : true
    }
  },
   stock : {
    type : Sequelize.INTEGER,
    allowNull : true
  }
}, {
    // obiect de configurare, daca am deja tabele nu decid eu cum se numesc si tabela care contine autorii..
    underscored: true
})

const app = express()
app.use(bodyParser.json())

app.get('/create',(req,res,next)=>{
    sequelize.sync({force:true})
    .then(()=>res.status(201).send('created'))
    .catch((err)=>next(err))
})

app.get('/products', (req,res,next)=>{
    Product.findAll()
    .then((products)=> res.status(200).json(products))
    .catch((err)=>next(err))
})

app.get('/products/lamps', (req,res,next)=>{
    Product.findAll({where: {category: 'lamps'}})
    .then((products)=> res.status(200).json(products))
    .catch((err)=>next(err))
})
app.get('/products/bedroom', (req,res,next)=>{
    Product.findAll({where: {category: 'bedroom'}})
    .then((products)=> res.status(200).json(products))
    .catch((err)=>next(err))
})

app.get('/products/livingroom', (req,res,next)=>{
    Product.findAll({where: {category: 'livingroom'}})
    .then((products)=> res.status(200).json(products))
    .catch((err)=>next(err))
})
app.get('/products/kitchen', (req,res,next)=>{
    Product.findAll({where: {category: 'kitchen'}})
    .then((products)=> res.status(200).json(products))
    .catch((err)=>next(err))
})
app.post('/products', (req,res,next)=>{
    Product.create(req.body)
    .then(()=>res.status(201).send('created'))
    .catch((err)=>next(err))
})

app.get('/products/:id', (req,res,next)=>{
    // daca aduc si entitatile copil (mesajele) -> eagerly loading
    // daca nu -> lazy loading
    Product.findByPk(req.params.id)
    .then((product)=>{
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(404).send('not found')
        }
    })
    .catch((err)=>next(err))

})
app.put('/products/:id', (req,res,next)=>{
    Product.findByPk(req.params.id)
    .then((product)=>{
        if(product){
        return product.update(req.body, {fields : ['name','description','price','stock','image']})    
        }
        else{
            res.status(404).send('not found')
        }
    })
    .then(()=>{
        // e posibil sa incercam sa scriem pe un stream inchis 
        // atunci testam
        if(!res.headersSent){
            res.status(201).send('modified')
        }
    })
    .catch((err)=>next(err))
})
app.delete('/product/:id', (req,res,next)=>{
    
     Product.findByPk(req.params.id)
    .then((product)=>{
        if(product){
        return product.destroy(req.body, {fields : ['name','description','price','stock','image']})    
        }
        else{
            res.status(404).send('not found')
        }
    })
    .then(()=>{
        // e posibil sa incercam sa scriem pe un stream inchis 
        // atunci testam
        if(!res.headersSent){
            res.status(201).send('remove')
        }
    })
    .catch((err)=>next(err))
})

app.use((err, req, res, next) => {
  console.warn(err)
  res.status(500).send('some error')
})
app.listen(8080)


