var express = require("express");
var path = require('path');
var app = express();
var port = process.env.PORT || 1337;
var passport = require('passport');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var models = require('./models');


var root = path.normalize(__dirname + '/');
app.use(express.static(root));
app.use(express.static(root + '../client/app/'));
app.use(express.static(root + '../client/app/bower_components/'));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.post('/API/TEST',models.TEST.TEST); 


app.get('*', function(req,res){
    res.end();
});


app.listen(port,function(){
    console.log("Listening diligently on port 1337.");
});
