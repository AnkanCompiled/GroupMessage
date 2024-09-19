const express =  require('express');
const port = 3001
const {mongoUri} = require('./connection/config')
const{mongodbConnect}  = require("./connection/mongoDb")
const User = require('./model/Register')

const app =  express()
app.use(express.json())
mongodbConnect(mongoUri);



app.get('/',(req,res)=>{
const body = {
    name:"arif",
    email:"lalalala",
    password:"65544"
}

const data = new User(body)
data.save()
.then(user=>res.status(201).json({msg:"lala"}));


})




app.listen(port,()=>{
    console.log(`Server Started in http://localhost:${port}/`)
})
