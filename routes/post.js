const express = require('express')
const route = express.Router()
const Post = require('../models/post')

//post content
route.post('/post', (req, res)=>{
  const {title, content} = req.body
  Post.create({title, content})
  .then(post=>{
    res.json({message:'Post added successfully'})
  })
  .catch(err=>{
    res.json({message: 'Post was not added'})
  })
})

//fetch content
route.get('/post', (req, res)=>{
  Post.find()
  .then(post=>res.json(post))
  .catch(err=>res.json(err))
})

//fetch a content
route.get('/post/:id', (req, res)=>{
  Post.find({_id:req.params.id})
  .then(post=>res.json(post))
  .catch(err=>res.json(err))
})

//delete a post
route.post('/deletePost', (req, res)=>{
  console.log(req.body.id);
  Post.findOneAndDelete({_id:req.body.id})
  .then(post=>res.json(post))
  .catch(err=>res.json(err))
})

//update a post
route.put('/post', (req, res)=>{
  Post.findOneAndUpdate({_id:req.body.id}, {$set:{
    title: req.body.title,
    content: req.body.content
  }}, {upsert:false})
  .then(post=>res.json(post))
  .catch(err=>{
    console.log(err);
    res.json(err)
  })
})

module.exports = route
