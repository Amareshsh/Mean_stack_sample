var express = require('express');
var router = express.Router();

const User = require('../model/userlist');

//retriving the data from database
router.get('/users',(req,res,next)=>{
  User.find(function(err,items){
    if(err){
      res.json(err);
    }else{
      res.json(items);
    }
  });
});

//inserting new data
router.post('/user',(req,res,next)=>{
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
  newUser.save((err,item)=>{
    if(err){
      res.json(err);
    }else{
      res.json({msg:'New user inserted!!'});
    }
  })
});

//updating data
router.put('/user/:id',(req,res,next)=>{
  User.findOneAndUpdate({_id: req.params.id},{
    $set:{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
  },
function(err,result){
  if(err){
    res.json(err);
  }else{
    res.json(result);
  }
})
});

//deleting data
router.delete('/user/:id',(req,res,next)=>{
  User.remove({_id: req.params.id},function(err,result){
    if(err){
      res.json(err);
    }else{
      res.json(result);
    }
  })
});


module.exports = router;