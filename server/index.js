

const express = require('express'); //requiring expresss
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express() //declaring app variable and setting it equal to express invoked
const port = 3001 //declaring the port you want your server to listen on

app.get(`/api/products`, getProducts)
app.get(`/api/products/:id`, getProduct)

app.get('/api/products', (req, res) => {
    res.status(200).send(products) 
}) //^^ writing an endpoint that will send our array of products up to the client
//Method, path, and handler


app.listen(port, ()=> console.log(`Server listening on port: ${port}`)       //invoking app.listen with a callback function
)

