var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get('/', function(req, res){
    res.redirect('/burgers') //Redirect to home page
});

router.get('/', function(req,res){
    burgers.all(function(data){ //display all burgers on home page
        var burgObj = {burgers: data};
        console.log(burgObj);
        res.render('index', burgObj);
    });
});

