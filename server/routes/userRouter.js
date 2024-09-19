const express = require('express')
const router =  express.Router()
const USER = require('../model/Register')
router.post('/signup',async(req,res)=>{
try{
    const {name,email,password} = req.body
    if(!body){res.json({status:"bad request"})}
    //if user is already a signed up user
    const entry = await USER.find({email})
    if(entry) res.json({status:"user already present"})
    
    //if no a reg user then sogn up is created
    const newUser = new USER(req.body)
    newUser.save()
    .then(res.status(201).json({status:"User Created "}))

}catch(err){
    res.status(500).json({status:"Server failed"})
}
})