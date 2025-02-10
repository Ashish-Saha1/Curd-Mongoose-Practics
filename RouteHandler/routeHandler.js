const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const userSchema = require('../Model/userSchema');
const User = new mongoose.model('testUser', userSchema)



//Get all data
route.get('/all', async(req,res)=>{
    try {
        const userData = await User.find()
        res.status(200).json({Mess: userData})
    } catch (error) {
        res.status(500).json({MessGet: error})
    }
})

// Get a data
route.get('/:id', async(req,res)=>{
    try {
        const paramId = req.params.id;
        const userData = await User.findOne({_id: paramId})
        res.status(200).json({Mess: userData})
    } catch (error) {
        res.status(500).json({MessGet: error})
    }
})


//post a data
route.post('/', async(req,res)=>{
    try {
    //const newUser = new User(req.body);
    //const userData = await newUser.save()
    const userData = await User.create(req.body)
    res.status(200).json({Mess: userData})
    } catch (error) {
        res.status(500).json({MessPost: error})
    }
})

//post Many data
route.post('/many', async(req,res)=>{
    try {
        const userData = await User.insertMany(req.body)
        res.status(200).json({Mess: userData})
    } catch (error) {
        res.status(500).json({MessPost: error})
    }
})


module.exports = route;