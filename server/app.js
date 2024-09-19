const express =  require('express');
const port = 3001
const {mongoUri} = require('./connection/config')
const{mongodbConnect}  = require("./connection/mongoDb")


const app =  express()
app.use(express.json())
mongodbConnect(mongoUri);







app.listen(port,()=>{
    console.log(`Server Started in http://localhost:${port}/`)
})
