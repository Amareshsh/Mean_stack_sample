const mongoose = require('mongoose');

const UserItems = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required: true
  }
});

const user = module.exports = mongoose.model('User',UserItems);