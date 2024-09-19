const express =  require('express');
const port = 3001
const {mongoUri} = require('./connection/config')
const{mongodbConnect}  = require("./connection/mongoDb")
const userRouter = require('./routes/userRouter')

const app =  express();
app.use(express.json());
mongodbConnect(mongoUri);

app.use('/',userRouter);






app.listen(port,()=>{
    console.log(`Server Started in http://localhost:${port}/`)
})
