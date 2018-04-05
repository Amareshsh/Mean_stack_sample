var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');


var app = express();

var routes = require('./route/routes');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/userlist');

// on connection
mongoose.connection.on('connected',()=>{
  console.log('MongoDB connected at port number 27017');
});

mongoose.connection.on('error',(err)=>{
  console.log(err);
});

const PORT = 3000;

//adding middleware - cors
app.use(cors());

//body parser middleware
app.use(bodyparser.json());

app.use('/api',routes);

app.get('/',(req,res)=>{
  res.send("hello world!!");
});

app.listen(PORT, ()=>{
  console.log('Server has been started at port 3000');
});