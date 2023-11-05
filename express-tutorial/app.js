const express = require('express');
const app = express();
const {products,people} = require ('./data');
app.get('/',( req, res )=>{
    res.send('<h1>Home Page</h1><br><a href="/api/products">Products</a> <a href="/api/people">People</a>')
})
app.get('/api/products',( req, res )=>{
    const productname=products.map((product)=>{
        const {name}= product;
        return {name}
    })
    res.json(productname)
})
app.get('/api/products/:id',( req, res )=>{
    const {id}= req.params
    const product=products.find((product)=>product.id==id)
    res.json(product)
})
app.get('/api/people',( req, res )=>{
    res.json(people)
})
app.get('/api/people/:id',( req, res )=>{
    const {id}=req.params
    const person=people.find((ppl)=>ppl.id==id)
    res.json(person)
})
app.listen(5000,()=>{
    console.log("Listening on port 5000");
})